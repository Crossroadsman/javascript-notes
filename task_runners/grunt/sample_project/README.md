README
======

This is a tiny sample project to illustrate the basic use of Grunt,
and especially combining several Grunt plugins together to make a workflow.

This sample project is an imaginary JavaScript library.

The folder structure is as follows:

.
├── dist
├── node_modules
├── package-lock.json
├── README.md
├── src
│   └── greeter.js
├── test
├── ts
│   └── greeter.ts
└── tsconfig.json

`ts`  : the TypeScript source code
`src` : the JS source code (as written directly, or compiled from TS)
`dist`: the distribution (a minified version of the JS)
`test`: code to test the project

Grunt Plugins
-------------
Several common plugins have been chosen for illustration. These are:
- `grunt-contrib-jshint` : for using JSHint (a static code analysis tool 
  for JS);
- `grunt-contrib-watch` : for watching the code and running predefined
  tasks (e.g., grunt-contrib-jshint) whenever files are added, changed,
  or deleted;
- `grunt-contrib-qunit` : for using QUnit testing;
- `grunt-contrib-uglify` : for minification;
- `grunt-contrib-concat` : for combining source files into one (prior to
  minification). 

