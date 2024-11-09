# Technical Evolution

## Software Services

Over time, Amazon's software architecture evolved to thousands of small, loosely coupled services. Generally, these services had these characteristics:

    Perform a single business function rather than multiple business functions. 

    Self-contained, with external dependencies

    A closed system to callers, who work with the service only through versioned APIs

    Has metrics, KPIs (Key Performance Indicators) measured with defined SLAs (Service Level Agreements)

    Easily **scaled** out by adding more instances of the same type ("scaling **horizontally**", rather than upgrading to more powerful hardware ("scaling vertically").  We want to match our capacity to our customers needs, and move quickly to meet those needs. 

We're still continuing to evolve, and you are part of that evolution!

## 2 Pizza team

benefits

Amazon relies on small independent teams that operate with a lot of autonomy over what tools and processes they use. This team structure helps the company:

    Retain the agility and speed of innovation of a startup 

    Ensure those building systems are close to their customer

    To staff programs and businesses, not projects.  

    To give teams end to end ownership over a distinct part of the business. This includes working with customers and developing, testing and operating solutions that meet their needs.

Amazon's Operational Tenets

Part of your work-life at Amazon will likely be taking part in an oncall rotation and working to making your service faster, more resilient and ultimately better for our customers. Keep these tenets in mind as you prepare to go oncall (and even on your hundredth oncall rotation!)

    You build it, you run it 

    Move fast and break very little

    Notify ourselves before a customer does

    Leadership principles drive our operational culture

## Architecture

