# Observatory 2.0

## Pain Point of Observatory 1.0

1. **large onboarding effort and duration - about 2 weeks dev effort, 400 lines of code changes and more than 4 weeks duration to onboard one service**. Sample CR: [SEW](https://code.amazon.com/reviews/CR-103590819/revisions/4#/details), LSEW([CR1](https://code.amazon.com/reviews/CR-112717284/revisions/4#/details), [CR2](https://code.amazon.com/reviews/CR-113080776/revisions/3#/details))
   1. Observatory 1.0 exposed complex structure to users(SDEs who need to onboard their services to Observatory). Users need to ramp-up the Observatory to deeply understand the structure.
   2. Users have to make up to 400 lines of code change when onboarding one service to Observatory. The code changes include mapping the service data to Observatory structure, publishing events to Observatory and adding corresponding unit test cases.
   3. Code review duration is at least 2 weeks. As the code changes involve almost every key methods, it brings lots of concerns to reviewers. For example, we got more than 20 comments in [LSEW CR](https://code.amazon.com/reviews/CR-113080776/revisions/3#/audit_log) and the code review spent us 5 weeks from CR creation to getting approved.
2. **Observatory 1.0 has restriction to build end to end traceability.** Each service onboarded Observatory 1.0 must be aware of its upstream and downstream process IDs and explicitly publish them to the Observatory 1.0. Without this information, the entire system overview of one request cannot be displayed in one graph.
3. **Observatory 1.0 has restrictions to apply in Lambda based services**. 

   As Observatory 1.0 has highly dependency on Jarvis and Jarvis has limitation in supporting lambda based services, there was issue of losing tracing data with Observatory 1.0. 

   1. Observatory 1.0 uses [KinesisProducerLibrary](https://w.amazon.com/bin/view/KinesisProducerLibrary/)(KPL), which is a separate native process running in the host. This design works best on EC2 hosts or ECS containers that are long running. However, AWS Lambda functions are very special in that they are usually ephemeral and the termination behavior varies. With the default settings, the Lambda function would close at the main process, and thus the KPL daemon wouldn't get a chance to publish Jarvis events before graceful exit. We have a [workaround](https://quip-amazon.com/kIj6AZTE4s7m/SAS-Data-Lost-Issue#temp:C:NeZ0da5effcb00144938cfea8e03) to resolve it but it is too hacky. 
   2. KPL Package Size too big, so we implement a customized light weight Kinesis producer with retry and flushSync function 
4. **Observatory UI lacks scalability.** We utilize the Jarvis UI within Observatory 1.0 which developed and maintained by the Jarvis team, the UI is not customizable by clients.
   1. Search experience is not ideal.
      1. Search function is quite cumbersome, requiring the addition of prefixes before keywords.
      2. Do not support fuzzy search. e.g. can not use bookingId to search related shipment
   2. Lack customization capability. 
      1. It is not able add User Guide, Ticket Template, Demo Video, FAQ. etc to the UI.
      2. Can not integrate with other tools in UI level like Demand OE Website.
5. **Lack key features in Observatory 1.0**
   1. Observatory 1.0 does not support to collect log info.
   2. Observatory 1.0 can not collect internal exception info if it is wrapped by other exception.
   3. Observatory 1.0 is not able to collect user behavior data.
6. **Lack of baseline and metrics to measure success**. We currently lack quantifiable metrics and baseline measurements to gauge the success of Observatory in solving our problems. For example, we don't know how many tickets/issues are related to missing work orders, how much SDE (Software Development Engineer) effort is required to resolve these issues without Observatory's assistance, and how much dev effort can be reduced with the use of Observatory. It is similar for other type [issues](https://quip-amazon.com/I799AtoI0ibF/Observatory#temp:C:BFK75b80b23ce5e47dc8fe25a7ca).

## Observatory 2.0

#### 1. Build Client 2.0. 

With Client 2.0, Users do not need to be concerned about the data structure of Observatory or the specific framework used by the Observatory (such as OpenTelemetry or Jarvis). Users only need to configure which method they want to be traced or which important data to include.
In case of adding new modules or methods to the system that is already onboarded to Observatory, Users simply need to add the new methods to the configuration file or add Observatory-related annotations to the new methods.
Furthermore, changes in the internal implementation of the Observatory system or future framework changes will be completely transparent to Users and will not affect them.

#### 2. Implement  a Loosely Link module to achieve end-to-end traceability.

We will utilize key IDs, tags, and timestamps, such as booking ID, shipping request ID, prId, shipment Id, MBL, and others, to dynamically link upstream and downstream services. Even though these services may not have direct invocation relationships, we can implement logical end-to-end traceability based on chronological order or other predefined rules.

**Short term option** - Using tags and timestamps to build relationships between onboarded services. The tag can be composed of key IDs and versions, such as ID + version.

In the initial stage, we are unable to onboard all services in XBTMS. To quickly build a sparse diagram, we plan to onboard 1-2 key services in each domain.

1. **Linking Services Across Domains**: To link services in different domains, we need to ensure that the service we plan to onboard recognizes the business ID from the upstream domain and also knows the ID in the current domain. For example, XbtShippingRequestListener in the Demand domain listens for shipment events and updates data to SR. It can establish a relationship between shipmentId and srId.
2. **Linking Services Within the Same Domain**: In the same domain, we use domain-specific IDs to link services within the flow. For instance, using srId to link all services within Demand.
3. **Using Timestamps for Sequence Determination**: Due to a lack of invocation information, we link services that have the same tags to a flow and use timestamps to establish the sequence.

Below is an example diagram to illustrate this approach.

**Long term option** - Use unique trace ID to link all the services for a single transaction. 

When a service receives an initial request, it creates a new trace and propagates the trace context including unique trace ID to the next service. This propagation typically occurs through headers in HTTP requests or metadata in other types of communication. Observatory supports trace context propagation for both synchronous API invocations and asynchronous events, such as those in AWS SNS, SQS, and EventBridge.

#### 3. Build a Lambda Extension Layer.

The Lambda Extension Layer is intended to resolve data loss issue for Lambda services in Observatory 1.0. The Lambda Extension Layer creates a new process within the Lambda service environment. This process communicates with the service process via sockets to retrieve data and send it to the Observatory. After the service process completes execution, it waits for the Extension Layer process to finish before closing together to ensure data integrity.

#### 4. Build Observatory UI 2.0

1. fuzzy any search
2. detailed page with tree table, tree plot, timeline plot, hyper process plot, log table, input and output.

### Next Steps in 2024

In long term, we will enhance in below items.

- Build Observatory UI 2.0 to address pain point #4 and #6. - P1
- Develop key features such as integrating with log info/CloudWatch log link, adding more detail info of payload, etc to address pain point #5. - P0
- Work with tech team to set the baseline and define the success metrics to address pain point #6.

### Overhead Introduced by Observatory

After onboarding, there will inevitably be some impact on the main services. For example, services like the API Gateway combined with Lambda (SAS) are highly sensitive to latency requirements. Implementing an easy onboarding process may require Observatory automatically instrumentation during Lambda cold start, which could increase the cold start time.

- [Observatory Performance Analysis](https://quip-amazon.com/pOglAFSLOS5I)
  - CPU Utilization - [before](https://monitorportal.amazon.com/igraph?SchemaName1=Search&Pattern1=class%3D%24CPU%24 metric%3D%24CapacityCPUUtilization%24 schemaname%3DSnitch host%3D%24xbtms-3pgl-gamma-bjs-m4xl-1b-f28225f4.cn-north-1.amazon.com%24&Period1=FiveMinute&Stat1=avg&HeightInPixels=350&WidthInPixels=450&GraphTitle=CPU Utilization&DecoratePoints=true&GraphType=zoomer&TZ=UTC@TZ%3A UTC&HorizontalLineLeft1=Max CPU - @ 80&LabelLeft=Percentage&StartTime1=2024-06-03T07%3A00%3A00Z&EndTime1=2024-06-28T14%3A05%3A00Z&FunctionExpression1=SORT(desc%2C avg%2C S1%2C 1%2C 10)&FunctionLabel1=[avg%3A {avg}%] {metricLabel})(1.51%) vs [after](https://monitorportal.amazon.com/igraph?SchemaName1=Search&Pattern1=class%3D%24CPU%24 metric%3D%24CapacityCPUUtilization%24 schemaname%3DSnitch host%3D%24xbtms-3pgl-gamma-bjs-m4xl-1b-f28225f4.cn-north-1.amazon.com%24&Period1=FiveMinute&Stat1=avg&HeightInPixels=350&WidthInPixels=450&GraphTitle=CPU Utilization&DecoratePoints=true&GraphType=zoomer&TZ=UTC@TZ%3A UTC&HorizontalLineLeft1=Max CPU - @ 80&LabelLeft=Percentage&StartTime1=2024-06-28T14%3A15%3A00Z&EndTime1=2024-07-04T06%3A55%3A00Z&FunctionExpression1=SORT(desc%2C avg%2C S1%2C 1%2C 10)&FunctionLabel1=[avg%3A {avg}%] {metricLabel})(1.46%) - gamma data  
  - Memory - about 80MB, 
  - Latency - less than 20ms (excluding cold start)
  - Lambda cold start time -  increase 3~4 seconds
    - We will work on decreasing the cold start time in the future