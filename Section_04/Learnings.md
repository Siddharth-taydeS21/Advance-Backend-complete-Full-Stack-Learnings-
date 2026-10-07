# Lecture 01, 02 - 

### Module system in Node.js (commonJS module system)

* How the `require()` function and `module.exports` object work in a Node.js's CommonJS module system - 

    * `require()` : `require` is a built in function which is used to import code snippets from another module or file which Exports his code using the `module.exports` object.  The require function accepts a file path as arguments. After that it executes the whole code in that file. Then the require function looks for a `module.exports` object at the end of That particular file. Then the final model.exports object becomes the return value of the require function. 

    * Module.exports object : `module.exports` is an object which is used to export the code In a file. By default this is an empty object. When we use `module.exports.something`, it includes that property, function, or method in that empty object. Then the overall `module.exports` object becomes the return value of the `require` function called in a particular file 

---
# Lecture 03 - 


### `module.exports` vs `exports` :- 

What are the similarities & differences between `module.exports` and just `exports` -

- Similarities : 
    - `module.exports` and `exports` are just the instance of the `export` property in the overall module object. 
  - `module.exports` and `exports` references the same object in memory. 

-  Differences : 
    - If we define properties in the `module.exports` object like this -
    ```javascript
    JavaScript 

    module.exports = {
        prop1, 
        prop2, 
        method,
    } 
    ```
    it will work.

    - If we add sub-props on the `exports` object like this -
    ```javascript
    JavaScript 

    exports.prop1 = prop1;
    exports.prop2 = prop2;
    ```
     it will work.  
    - If we define properties directly on `exports` object like this -
    ```javascript
    JavaScript 

    exports = {
        prop1, 
        prop2, 
        method,
    } // We are not using the method object's `exports` property at all. 

    console.log(module.exports) // {} empty objcet
    ```
     it won't work. 

---
# Lecture 04 - The module object


#### Properties in the module object -

- `module.children` : - an array. If the file is importing other files as a module, then those modules will be contained in this `model.children` array. 

- `module.exports` : - This is an object and this will contain the variables, methods, or functions the module is exporting. 

- `module.filename` : - The file in which the module is created

- `module.id` : - The unique identifier string in every module.
A module itself has its path `.` as its id. The required (imported) modules have their paths as their `module.id`. 

- `module.isPreloadin` - A Boolean flag that indicates the file is executing. While a file is executing it will be true, and after execution it will be false. 
- `module.loaded` : - A boolean flag that indicates the file has done its execution or loading. 
- `module.path` : - The Parent Directory location of the module 
- `module.paths` : - An array of string paths for directories which Node.js will search to download independent modules. Node.js will search for modules in this directories using the paths listed in this array, all the way up to the root directory. 

---
# Lecture 05, 06 

### Module wrapper function in Node.js

A module wrapper function in Node.js is the internal mechanism of Node.js, which wraps the code written in any CommonJS module into an immediately invoked function expression to keep the top-level functions and classes in the global scope. 

#### The basic structure of a module wrapper function - 
```javascript
javascript

(function(__filename, __dirname, require, exports. this){
    // Code inside the modal goes here 
})(__filename, __dirname, require, exports. this)

```

The purpose of the module wrapper function is to keep the global scope environment safe, so any local variable cannot pollute it and cannot introduce unexpected behavior in our code. 
It also injects some helper variables and objects in the module wrapper function, which can work as helpers for our code.

#### What are the objects and properties the module wrapper function's local scope has access to - 

it has access of - 
- require function - for accessing other modules as we need
- __dirname        - the current working directory
- __filename       - exact path for file of a module
- exports object   - for exporting the code 
- this   

this issential variable and methods passed by Node.js, are helpful for accessing the require function, module.exports object, current file location, current directory locations in any CommonJS module accross our entire codebase.

---
# Lecture 07, 08

### ES6 module is in Node.js - 

ES6 modules are the official standards for new generation JavaScript development. ES6 modules executes asynchronously (non-blocking). They are analyzable, means the bundlers can look at the code at compile time (before running the code) to strip out unused code. 
in ES6 modules we use `import` and `export` syntax followed by module paths to run and execute code. 

#### how to access files and directories using ES6 modules in Node.js.

In ES6 module system, javascript provides us the `import.meta` object.
this object has the access of 
- current file location in - 
`import.meta.filename`,
- has the access of current working directory in - `import.meta.dirname`
- it has a method `resolve` at - `import.meta.resolve`

we can easily access the current file and current working directory using `import.meta.filename` & `import.meta.dirname` in a Node.js ES6 module.

---
# Lecture 09, 10


### their the various types of module in Node.js - 

the most Common and must know module types are :  
1. core Node.js modules/native Node.js modules
2. User created modules
3. npm modules 

### Differences between CommonJs Modules and ES6 modules  - 

#### Commonjs Modules - 
- CommonJs modules runs synchronously (blocking code)
- CommonJs modules runs in non-strict mode of javascript 
- in Commonjs modules, the value of `this` keyword is equal to the `module.exports` object
- CommonJs module can not be hoisted in memory creation phase of javascript
- we can not use `await` keyword outside of an async function in CommonJs modules
- in Node.js, by default every `.js` file is a CommonJs module
- CommonJs module can load and execute any type of without validating the file extension 
- in CommonJs modules providing file extensions in require function call to execute them is optional
- its a convention to write `.cjs` file extension if the js file is a CommonJs module (in legacy code bases, or in the code bases where project uses both module systems)
- we can access the file name and directory name in a CommonJs module using the `__filename` & `__dirname` properties of module object.


#### ES6 Modules - 
- ES6 modules runs Asynchronously (non-blocking code)
- ES6 modules runs in strict javascript mode
- in ES6 modules, the value of `this` keyword is equal to `undefined`
- javascript allocates the space in memory to import keywords and executes the import keywords in the memory creation phase. 
- we can use `await` keyword at the top level in an ES6 module without needing to write an async function
- to make the `.js` file an ES6 module, we need to set the `type="module"` in the package.json file.
- ES6 module can just load and execute file with `.js`, `.cjs` & `.mjs` extensions.
- in ES6 modules file extensions are mandatory while importing them
- its a convention to write `.mjs` file extension if the js file is an ES6 module (in legacy code bases, or in the code bases where project uses both module systems)
- we can access the file name and directory name in an ES6 module using the `import.meta.filename` property and the `import.meta.dirname`
property

---
# Lecture 11, 12 - 


### Different types of modules
1. User created modules
   User-created modules are simple TypeScript and JavaScript files which we write to split our application logic into manageable chunks. To use this modules we must explicitly export them using `module.exports` syntax if we are using CommonJS and using `export` syntax if we are using ES6 modules. To import them we can use the `require()` function for CommonJS modules and the `import` keyword for ES6 modules. 

2. Core / Native Node.js modules
   "Core" modules are built-in Node.js modules which are shipped directly when we install Node.js in our system. On the other hand "Native" modules are the modules which include compiled C++ code in them, like the `fs` module or `crypto` module. 
   To import and export or use them, we can use the same syntax. For CommonJS we can use `module.exports` and the `require` function and for ES6 modules we can use the `import` and `export` keywords. 

3. Npm modules
   Npm modules are the third-party modules which are developed by developers or communities. To use npm modules and install them in our system, we use the CLI. By using commands like `npm i express`, we can install these third-party npm modules in our system to use them in our application logic. Node.js will download these third-party modules inside our local `node_modules` folder. To use them in our code we can use the same syntax, like `module.exports` and the `require` function for CommonJS modules, and the `import` and `export` keywords in ES6 modules. Node.js will find them inside the node_models folder to resolve their use in our code. 

   ---

   # Lecture 13, 14 - 

### Deep dive into the package.json file -

#### What is the main purpose of having a package.json file in our project? -

The main purpose of having a package.json file in our project is that it will act as a manifest or configuration hub of our project because the package.json file includes key information about our Node.js, JS/TS project, such as the metadata about our project, dependencies, automation scripts, and configuration of our project.

The package.json file includes the metadata about a project, such as:
name of our project, version of our project, author, license, descriptions & keywords.

It lists all the external libraries and packages which are required for our project in development and testing. 

It also includes the very important and key data about our project, such as the entry points of our project and automation commands which will help our project to run, build, or test it. 

---
#### What the core components of a package.json file are -
#### Required fields - 
- `name`: A Unique string which will represent the name of our package module 
- `version`: A number that represents the current version of our package or module 

#### Informational metadata - 
- `description` : A plain human-readable text that describes what our project does 
- `keywords` : An array of screens which will help users to find your package through npm searches 
- `author` \ `license` : the name of the project developer maintainer and in the license it is `ISC` or `MIT`. 

#### Execution and entry points - 
- `main` - The main entry point for our project or application
- `scripts` - Custom scripts like `start`, `build`, and `dev` to automate commands using `npm run`.

#### Dependencies - 
- `dependencies` - Packages or modules that our application needs to work.
- `devDependencies` - Packages or modules that our application needs only in development or for testing.
- `peerDependencies` - Packages that our module or package wants to stay in the consumer's environment. 

---

# Lecture 15 - 
### Intro to `Shebang` - what is shebang - 
A shebang is a character sequence, `#!`, written at the very beginning of our program file. It works as an interpreter directive to tell it which program should run this file. 

#### How it works - 
When we write `#!` characters at the very top of our file and after that we give the executable binary file location path, then our interpreter will not execute it as a raw binary. Instead it will read the complete file and execute it using the programming language's path, which we have given after the shebang. 

#### example - 
```javascript
#!/usr/bin/env bash      //for running a bash commands using files 
#!/usr/bin/env python3   // for running python in cli
#!/usr/bin/env node      // for running node in cli
``` 

# Lecture 16 - 
### Library packages vs CLI packages and local packages vs global packages. 

#### Library packages - 

A collection of code, functions, classes, or modules that we need to directly integrate Into our project. We can install them using the CLI command `npm install`. They get installed directly inside our local directory, listed in the package.json file and the node_modules folder. for example express, jwt, bcrypt.

#### CLI packages - 

The CLI packages are specially developed to run inside our command-line interface. We can use them to run our project directories or files using the shell scripts directly inside our CLI. for example vite, nodemon.

#### Local packages - 

Local packages refer to packages scoped to our local project folder or directory. We installed these packages directly inside our project's node_modules folder to use them in our application. We can only use them inside our specific project and we cannot use them outside our project directory globally. 

#### Global packages - 

Global packages are directly installed and shipped inside a specific directory on our operating system and they instantly get listed in our PATH, making them accessible inside any terminal shell or any project directory. Global packages are not different or special packages from the other three. We can install and make any package available globally just by using the `-g` flag while installing them. 

---

# Lecture 17 - 
### How NPX works 

This is how npm works in four certain steps: 

- first step - 
at the very first step npm looks for the package.json file. In the package.json file npm looks for two keys:
1. The `name` key: in that key we usually write the package name.
2. The `bin` key: in this key we give the path of an executable file which refers to the package name.
When `npx` successfully finds the package name, which is the same as the `npx` command which we have written in the terminal to execute, `npx` simply executes the executable file using the given path in the bin key in the package.json file.


-  second step - 
1. If npx didn't find any package or executable file in the package.json file, then it moves to the second step.
2. In the second step npx looks for the node_modules folder. In the node_modules folder npx specifically looks for the .bin folder.
3. In the .bin folder npx will look for a module with the exact same name as the command we are trying to execute using `npx`. If `npx` successfully finds a package or module in the node_modules folder inside the .bin folder, then `npx` will execute it.


- third step -
If npx didn't find any package or executable file in the second step, then it moves to the third step. In the third step npx finds the package inside our system's globally installed packages. For Windows the globally installed npm packages are usually stored at this location -   
`C:/users/user/AppData/Roaming/node/node_modules`  
and for Linux environments the globally installed npm packages are often stored in this location -   
`/home/user/versions/node/version/bin`.
`npx` will find the package he wants in these locations according to the OS environment and if in these locations he finds the package, then he will execute it. 

- fourth step -
If `npx` wasn't able to find the package or module in the previous three steps, then it will move to the fourth step as the final option. It will find the package or module on the global npm registry and it will fetch it and download all the source code for the specific package inside our project's `node_modules` folder And lastly it will search for the executable file inside the fresh node_modules folder and finally it will execute it.

...

# Lecture 18 - 
### What is Npx 

`npx` stands for Node Package Execute. It is a CLI tool built for executing a package, a module, a directory, or a file inside our terminal for testing and development purposes. 

When we execute anything using `npm`, it will first search for that executable file or package locally inside our operating system and also inside our project directory if we are specifically running `npx` from our project directory. 

If it doesn't find the package locally or globally inside our local system, then it will fetch and download the package from npm's registry. It will store that package inside our operating system, node_cache, or the global `node_modules` folder for temporary testing and development. 

---
