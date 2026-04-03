# System Calls

- System calls
- The file API
- Kernel entry/exit

User Mode vs Kernel Mode

### Why system calls

Modern kernels offer many services to applications

### function calls

regular function calls work like this:

- Caller pushes arguments on the stack
- Caller jumps to the line



IA-32 architecture



### System calls

- From programmer's perspective, system calls are a lot like function calls

### Trap Instructions

- Switches to  kernel mode & jumps to a predefined address
  - Why does the kernel need a special, well-defined "entry point"
- 

### System calls steps

#### Kernel entry

PCB

#### Blocking



#### Context Switch



## Scheduling

- Preemptive
- Non-preemptive



Priority

- Fixed
- Shortest Priority



Context switching and efficiency



## The File API

### File descriptors

Reading from & writing to streams

- `int read(int fd, void *buf, size_t size)`
- `int write(int fd, void *buf, size_t size)`

Working with multiple streams