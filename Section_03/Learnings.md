# Lecture 01, 02, 03 - 
## What is OS, CPU, CPU cores (physical vs logical), processes, context switching 
  ### OS : 
  It stands for Operating system. Operating systems act as a bridge between the core computer hardwares And the applications or users. They handle tasks like processing power, memory and storage management, and connected devices.

  ### CPU : 
  It stands for Central Processing Unit. CPU is a primary and the most important component in a computer, which acts as the brain of the computer. It handles tasks like executing programs, heavy calculations, and coordination of other components of the computer.

  ### CPU cores : 
  A CPU core is an individual processing unit of a CPU that can handle different programming tasks or other instructions. it's like workers in the factory while the factory is CPU. The older versions of CPUs just had one core. That basically means the older CPUs can only handle one task at a time, but newer-generation CPUs had multiple cores, which allows the OS to handle multiple tasks at the same time.

  ### physical vs logical CPU Cores : 
  * Physical cores : 
    they are real, physical hardware components directly connected with the CPU. they deliver 100% processing and compute power. Manufactured directly with the CPU. the OS sees them as primary hardware units.      
  * Logical CPU cores : 
    Logical Cores developed by the software. they had shared access of the resources of Physical cores which increases the overall work speed. the OS trets them as completely different CPUs. 
    
  ### Processes : 
  Process in OS is an active, running instance of a computer program which has stored in memory storage. the operating system loads the memory which triggers the start op a process. a process can have parent precess and the parent process can have more than one child processes. 

  ### context switching : 
  A context switch is a process of pausing the currently runnings process -> savings it's state -> loading the other process -> savings it's state ->  pausing the new currently runnings process -> and so on with all runnings processes. The OS can make more thousands of context switches in just a millie second. with the help of context switching OS can share a single CPU core to run multiple processes. it creates an illusion that a single CPU core is running multiple processes at same time (multitasking).   


# Lecture 04 -
## What is threads, concurrency, parallelism 
  ### threads :
  a thread is a smallest unit of execution in a process which the OS can execute using the CPU. a thread exists in side a programme called a process.

  ### concurrency : 
  concurrency in OS is the process of running multiple tasks/processes on a single CPU core by switching there contexts or running multiple tasks/processes in parallel using multiple CPU cores

  ### parallelism : 
  parallelism in OS is the process of running multiple tasks/processes simultaneously using multiple processing units, Cores or CPUs. 