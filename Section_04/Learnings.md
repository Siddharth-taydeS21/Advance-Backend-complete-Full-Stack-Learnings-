# Lecture 01, 02 - 

### Module system in Node.js (commonJS module system)

* How the `require()` function and `module.exports` object work in a Node.js's CommonJS module system - 

    * `require()` : `require` is a built in function which is used to import code snippets from another module or file which Exports his code using the `module.exports` object.  The require function accepts a file path as arguments. After that it executes the whole code in that file. Then the require function looks for a `module.exports` object at the end of That particular file. Then the final model.exports object becomes the return value of the require function. 

    * Module.exports object : `module.exports` is an object which is used to export the code In a file. By default this is an empty object. When we use `module.exports.something`, it includes that property, function, or method in that empty object. Then the overall `module.exports` object becomes the return value of the `require` function called in a particular file 

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

# Lecuture 05, 06 

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

# Lecuture 07, 08

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