README
======

This is a tiny sample project to illustrate the basic use of Grunt,
and especially combining several Grunt plugins together to make a workflow.

This sample project is an imaginary JavaScript library.

The folder structure is as follows:

```
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
```

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


Issues
------
### 1. Missing libXss.so.1 ###

```console
$ grunt
Running "jshint:files" (jshint) task
>> 2 files lint free.

Running "qunit:files" (qunit) task
>> There was an error with headless chrome
Fatal error: Failed to launch chrome!
/home/MyUser/javascript-notes/task_runners/grunt/sample_project/node_modules/puppeteer/.local-chromium/linux-579032/chrome-linux/chrome: error while loading shared libraries: libXss.so.1: cannot open shared object file: No such file or directory


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
```

This seems to be due to one of the packages not declaring all its dependencies, in this case `libXss.so.1`.

Solution:  
(Note, it's probably possible to do an equivalent fix using npm, but the apt solution worked in this case)

1. Find where the libXss library comes from:
   ```console
   $ sudo apt search libXss
   libXss
   Sorting... Done
   Full Text Search... Done
   libxss-dev/cosmic 1:1.2.3-1 amd64
     X11 Screen Saver extension library (development headers)

   libxss1/cosmic,now 1:1.2.3-1 amd64
     X11 Screen Saver extension library
   ```
2. Install the associated package:
   ```console
   $ sudo apt install libxss1
   Reading package lists... Done
   Building dependency tree
   Reading state information... Done
   The following NEW packages will be installed:
     libxss1
   0 upgraded, 1 newly installed, 0 to remove and 1 not upgraded.
   Need to get 8,140 B of archives.
   After this operation, 32.8 kB of additional disk space will be used.
   Get:1 http://mirrors.linode.com/ubuntu cosmic/main amd64 libxss1 amd64 1:1.2.3-1 [8,140 B]
   Fetched 8,140 B in 0s (730 kB/s)
   Selecting previously unselected package libxss1:amd64.
   (Reading database ... 125236 files and directories currently installed.)
   Preparing to unpack .../libxss1_1%3a1.2.3-1_amd64.deb ...
   Unpacking libxss1:amd64 (1:1.2.3-1) ...
   Setting up libxss1:amd64 (1:1.2.3-1) ...
   Processing triggers for libc-bin (2.28-0ubuntu1) ...
   ```
3. Rerun grunt:
   ```console
   $ grunt
   ...
   Running "qunit:files" (qunit) task
   >> 0 tests completed with 0 failed, 0 skipped, and 0 todo.
   >> 0 assertions (in 0ms), passed: 0, failed: 0
   ```
