# Multithreading for Graphics

Interactive graphics separates work across the render thread, simulation, asset loading, and background tasks. The main constraint is that graphics APIs and windowing systems often require context-bound operations to stay on one designated thread.

## Typical Split

- **render thread**: submits GPU commands and presents frames;
- **simulation workers**: update physics, animation, AI, or particles;
- **asset workers**: decode textures, meshes, and scene data;
- **job system**: schedules small dependency-aware tasks across a worker pool.

Double buffering or frame snapshots let the renderer consume a consistent state while the next simulation update runs. Shared mutable scene graphs are harder to reason about and can introduce locks into the frame-critical path.

## Safety Checklist

- define ownership for every resource;
- avoid holding locks while issuing GPU or filesystem work;
- use queues for thread handoff and bound their growth;
- separate CPU completion from GPU completion fences;
- profile frame-time variance, not only average throughput;
- make shutdown and cancellation explicit.

Parallelism helps only when task granularity exceeds scheduling and synchronization costs. Measure the critical path before adding workers.
