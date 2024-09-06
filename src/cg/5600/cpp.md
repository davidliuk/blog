# C++

pros

- Runs very fast
  - One of the more scalable modern programming languages
- Programmer has fine control over memory usage

cons

- memory management
- older legacy features
- Compiler errors can sometimes be cryptic
- Difficult for a beginner programmer to learn

**Basic data types**



function

- A function has four main components
  - Return type
  - Name
  - Inputs
  - Body

Compilers

- MSVC compiler for Microsoft Visual Studio (one of the more common C++ IDEs, Windows only)
- GNU Compiler Collection (GCC) works on all UNIX-based systems, including Mac OS
- MinGW is the Windows port of GCC
- The clang compiler for UNIX and Windows
- And more!
- They all have their own idiosyncrasies; we’ll be using the ones provided with Qt installations.

Compling

- Compiler reads all .cpp files
- All functions are implemented in .cpp files
- Top-down compilation

Forward declaration

- This code “promises” the
  compiler that an
  implementation of *twice()*
  will be provided later
- Lets the compiler know the
  function’s inputs and return type
- This *will* compile, but only
  because *twice()* has an
  implementation.
- What about many forward declarations?

**Header Files**

- Collections of forward declarations
- Use #include “name.h” to refer to them
- Declarations for classes, functions, constants, etc.
- Imagine pasting their entire contents in your .cpp file wherever you #include them

**Include Guards**

- Avoid compiling the same header more than once
  - \#pragma once is the simpler way
- Should ALWAYS use include guards
- C++ compiler will throw an error if it finds two functions/classes/structs/etc. with the same name (happens without include guards)

**The C++ Build Model**

1. Read cpp files
   1. Read any included headers before moving to next cpp file
2. Build OBJ files via compilation
3. Link the OBJs into an executable

**C++ Standard Library**

### Pass

**Pass by copy**

- By default, all data passed into a scope is copied in
- In foo(), a is a distinct entity from x; it just happens to also have a value of 10.f
- What are the results of the first and second print statements? 

**Pass by reference**

- If you want a function to modify memory outside of its scope, you need to pass an object by reference
- Use the & symbol to denote a reference rather than a copy
- Now foo() modifies x since a is a reference to x, not a copy of it

Ref

- A reference is just a memory address that refers to the location of another variable
- It also knows the type of the variable it refers to, e.g. int &x versus char &y
- The amount of memory a reference takes up is constant, regardless of the variable it refers to (always 64 bits on a 64-bit system, 32 bits on a 32-bit system)
- From our human coder standpoint, it’s an alias for the variable it refers to

**memory usage**

- If you pass large variables into functions as references, you save memory stack space

**Reference variables**

- References can also be declared outside of a function header
- They behave as aliases of other variables; think of xRef as another name for x in main’s scope
- Depending on where the reference is created, the compiler may in fact optimize it to be an actual alias of a variable (i.e. replace xRef with x when compiled into assembly)

**Const syntax**

- Const can be generally used in three categories
- Variable declaration
  - const int x = 10;
- Return value
  - const int& operator[](int i);
- Functions
  - string getName() const;

## Class

**member**

- Class members (variables and functions) can be declared as private, protected, or public
- Private members can only be accessed by instances of the class
- damageEnemy can access the other Monster’s private member variable “health” because damageEnemy is a member function of Monster
- Member privacy exists solely to enforce the scope from which objects can be accessed

**Inheritance**

- In object-oriented programming, we can have classes that extend or modify the functionality of some other class
- Square inherits from the Geometry class and has a different implementation of PrintName()

Virtual functions

**Friend classes**

- Sometimes you want some class to be able to access the private and protected members of a separate class, but don’t want to make those members public
- Public would mean all other classes could access them, not this specific one
- Solution: declare it as a friend class!

Friend function

## Memory Model

### **Stack**

- Stack stores temporary variables
  - Managed efficiently by CPU
  - Fast read/write
- When a function creates a variable, it gets pushed onto the stack
- When a function exits, all variables created by that function get popped from the stack

### Heap

- C++ programs have access to another memory space: The Heap
- Much larger than the stack
- Heap-allocated memory must be freed by its owner
  - Won’t be automatically deleted upon scope exit
- How do we store memory on the heap?

**Heap Allocation: Smart Pointers**

- C++ provides two standard library classes to help us access heap memory
  - std::unique_ptr
  - std::shared_ptr
- Store the address of the heap memory they manage

**Smart Pointers**

- Smart pointers “own” the memory to which they point
- A single instance of a unique_ptr can be the only smart pointer that points to its heap memory
- Multiple shared_ptrs can point to the same heap memory, but have more runtime overhead cost
- When heap memory owned by a smart pointer is orphaned, that heap memory is freed automatically
- When a smart pointer points nowhere, its value is nullptr, the modern C++ null value.

**RAII**

- std::move is shorthand for “Move the ownership of this heap memory to a new object”
- The new smart pointer **acquires** the heap **resource** and thus becomes the object that should free that memory

**Function pointers**

- Like variables, functions are stored at addresses in your computer’s memory
- If they have locations, we can make pointers to them!
- Why use them?
  - Say you’re trying to make a GUI editor and need to write a Button class
  - Rather than making a subclass for every possible button functionality, give the Button a function pointer as a member variable, and invoke that function when the button is clicked!