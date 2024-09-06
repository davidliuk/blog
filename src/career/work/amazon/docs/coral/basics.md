

Prefer Model-First over Code-First for Service Development

This document asserts that it is a best practice to deliberately define the model of a network-based service before its implementation using a model-first methodology. While there are no silver bullets, and all projects have different requirements [1], a model-first approach should be the default, and a code-first approach should only be used in exceptional cases.

Definitions

- Model: a contract that defines how a client and server communicate. Models are often used to generate service stubs, input validation, clients, documentation, mocks, and various other artifacts. Examples include Smithy, Coral, UML, Apache Thrift
- Code-first: the model of a service is derived from the implementation of a service using source code analysis and the meta-modeling capabilities of a programming language. Examples include, JAX-RS implementations and Prisma.
- Model-first: the model of a service is defined in a domain specific language, and service code is (partially) generated from the model. Examples include Coral, gRPC, Cap’n Proto, and Thrift.

    When developing a service, the contract between the client and server is the most important detail there is, and the code that implements the contract is an implementation detail. Consider: if you reimplement your Java web service using Kotlin or Go or Rust, none of your clients will care; but if you make a breaking change to your API, the applications your customers built will stop working.

    Model-first requires that we think about services in terms of how our customers use them rather than in terms of how we will implement them. Model-first development often results in a faster time to market due to earlier feedback loops and less time spent implementing a service before it’s adequately designed.

