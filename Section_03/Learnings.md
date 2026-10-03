# Lecture 01, 02, 03 -

### What is OS, CPU, CPU cores (physical vs logical), processes, context switching

-  OS :

  It stands for Operating system. Operating systems act as a bridge between the core computer hardwares And the applications or users. They handle tasks like processing power, memory and storage management, and connected devices.

-  CPU :

  It stands for Central Processing Unit. CPU is a primary and the most important component in a computer, which acts as the brain of the computer. It handles tasks like executing programs, heavy calculations, and coordination of other components of the computer.

-  CPU cores :

  A CPU core is an individual processing unit of a CPU that can handle different programming tasks or other instructions. it's like workers in the factory while the factory is CPU. The older versions of CPUs just had one core. That basically means the older CPUs can only handle one task at a time, but newer-generation CPUs had multiple cores, which allows the OS to handle multiple tasks at the same time.

-  physical vs logical CPU Cores :

- Physical cores : 
they are real, physical hardware components directly connected with the CPU. they deliver 100% processing and compute power. Manufactured directly with the CPU. the OS sees them as primary hardware units.      
- Logical CPU cores : 
Logical Cores developed by the software. they had shared access of the resources of Physical cores which increases the overall work speed. the OS trets them as completely different CPUs.

-  Processes :

  Process in OS is an active, running instance of a computer program which has stored in memory storage. the operating system loads the memory which triggers the start op a process. a process can have parent precess and the parent process can have more than one child processes. 

-  context switching :

  A context switch is a process of pausing the currently runnings process -> savings it's state -> loading the other process -> savings it's state ->  pausing the new currently runnings process -> and so on with all runnings processes. The OS can make more thousands of context switches in just a millie second. with the help of context switching OS can share a single CPU core to run multiple processes. it creates an illusion that a single CPU core is running multiple processes at same time (multitasking).   

# Lecture 04 -

###  What is threads, concurrency, parallelism

- threads :

  a thread is a smallest unit of execution in a process which the OS can execute using the CPU. a thread exists in side a programme called a process.

-  concurrency :

  concurrency in OS is the process of running multiple tasks/processes on a single CPU core by switching there contexts or running multiple tasks/processes in parallel using multiple CPU cores

-  parallelism :

  parallelism in OS is the process of running multiple tasks/processes simultaneously using multiple processing units, Cores or CPUs. 

# Lecture 06 -

### How to debug processes and worker threads

- Learned about how we can use inspect and debug processes and threads using a software called system informer. Also, by using VS Code's built-in run and debug tab.
- Learned about how to connect our Node REPL, which is opened in a specific folder or directory, with the Run and debug tab using a built-in VS Code extension called JavaScript Debugger.

# Lecture 07 -

### Environment variables

- There are three types of environment variables:

1. User-specific environment variables
1. System-specific environment variable
1. Process-specific environment variables

- Learned about How to make, edit, and delete User-specific & System-specific environment variables using the system's user interface.
- Learned about how to add, override process environment variables using `export variableName=<variable>`
- learned about how to add a permanent process environment variable using the `.bashrc` file

# Lecture 08 -

### Working with environment variables in the terminal 

1. How to print all process environment variables using `env`, `printenv` commands in bash terminal
2. How to set, override Usre specific environment variable with the help of bash terminal using the setex command : `setex variableName=<variable>`
3. How to set System specific environment variables with the help of bash terminal using the command - `powreshell -Command "setex variableName '<variable>' /M"`
4. how to set System specific environment variables with the help of bash terminal using the Node.js `child_process` module. 
```javaScript
const { exec } = require('child_process');

exec(`powershell -Command "setex VariableName '<variable>'"`)
```
5. Learned a trick of debugging the node.js environment in chrome dev tool using `node --inspect <filename>` falg.

# Lecture 09 -

* Installed Windows Subsystem for Linux because (WSL) it is compatible with the deployment server and that's what the deployment servers and Cloud platform providers provide us to work or interact with our server. 

* Installed VS for better compatibility with WSL and Ubuntu operating system. 

# Lecture 10 -

### Path system explained: Windows vs Linux path system 

There are two types of paths: relative path and absolute path. 
1. Absolute path : An absolute path is the current location Of a file or a directory, which is related to the user, like the current working directory user is using. 
2. Relative path : A relative path is a full exact location of a file or directory starting from the root directory of a file system. 
3. cygpath command : This command is useful for converting universal paths into the desired path that we want. For example this command can convert the Windows path to a Unix path or the Unix path to a Windows path with the help of the flags. 

* for ex. - 
`cygpath -w <path>` Will convert any path to a Windows system-specific path. 
`cygpath -u <path>` Will convert any path to a Unix system-specific path 

# Lecture 11 -

### What are executable files and how to create the music node.js - 

There are two types of files:
1. Script Executable files - 
A Script Executable file is a file that contains plain text, a human-readable format of scripting languages. A CPU can never understand those files which contain plain text so for that they need interpreters, programming languages like Python, JavaScript, or Java. this languages compiles, converts that scripts into machine code or low-level binary code so that a CPU can understand it and then execute it. 

2. Binary executable file - 
A binary executable file is a file that contains low-level compiled machine code, the sequence of zeros and ones which a computer CPU can understand and execute without any translation. 
We use programming language interpreters like C++, Java, or Rust To compile All of our human-readable codebase in to binary code so the computer's CPU simply can understand it and execute.

3. We can execute any script executable file, or binary executable file simply by using a terminal and giving the path of that exact file as a command. 

4. In PowerShell if we want to execute a file, we need to use the `$` sign and the path of that executable file - 

``` 
powershell 

& <Executable file path>
```

For Bash or other Linux-based terminal shells - 

``` 
bash 

<Executable file path>
```

# Lecture 12 -

### File permissions in Linux OS -

There are three main types of file and folder permissions in the Linux operating system:
1. Read permission
2. Write permission
3. Execute permission

* How to see file and folder permissions and other stats using `ls -l` In  WSL terminal.

* How to decode the output that the terminal prints when we hit `ls -l` in a WSL terminal - 

### Understanding the output of `ls -l`
``` 
output- 

drwxr-xr-x 2 siddharth siddharth 4096 Oct  1 16:28 L06_creatings-and-debugging-threads
```

### Decoding - 
```
drwxr-xr-x      ------ permissions
2               ------ Number of hard links 
siddharth       ------ User/owner 
siddharth       ------ group name 
4096            ------ Size in bytes
Oct 1 16:28     ------ time (Last modified)  
folder Name     ------ directory 
```

### How to decode permissions - 
#### the first letter `d` in this code - `drwxr-xr-x` 
* The first letter `d` represents the type of asset.
 If the asset is a folder the first letter will be `d`, which represents the directory. 
 * If the asset is a file the first letter will be `-`, which represents a file. 
#### The Permissions : `rwxr-xr-x` 
* In the above example there are three groups. User/owner, group, and other. -
```
|rwx|r-x|r-x|
  |   |   |_____________> other's permissions
  |   |_________________> group's permissions
  |_____________________> user/owner's permissions 
```

### What are the random `r`, `w` and `x` letters? 

* `r` --> means read permission is allowed. 
* `w` --> means write permission is allowed. 
* `x` --> means execute permission is allowed. 
