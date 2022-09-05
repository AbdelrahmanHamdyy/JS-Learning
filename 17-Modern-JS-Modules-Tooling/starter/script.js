/* 
NPM (Node Package Manager)
Used to include 3rd party packages and provide us with development tools that help build our applications like BABEL, live-server, WEBPACK, PARCEL
Modern JS:
Development -> Build process -> Production
In the build process, there are 2 steps:
1) Bundling (Join all modules into one file)
2) Transpiling/Polyfilling which uses BABEL to convert modern js back to ES5

A module is a reusable piece of code that encapsulates implementation details of a certain part of our project
-> Usually a standalone file, but doesnt have to be
-> Import/Export
-> Compose Software: Small building blocks that we put together to build complex applications
-> Isolate components
-> Abstract code
-> Orgainized code
-> Reuse code
** NATIVE JS (ES6) MODULES
ES6 modules are stored in files, exactly one module per file
-> Top-level variables  (Scoped to module)
-> Default mode is strict mode
-> Top-level this keyword is undefined
-> Allows imports and exports for variables (Must happen at top-level)
-> Imports are hoisted
<script type="module"
-> File downloading is asynchronous

## Modules are imported synchronously
## Top-level ("static") imports makes imports known before execution
## This makes bundling and dead code elimination possible (reason for sync)
*/
