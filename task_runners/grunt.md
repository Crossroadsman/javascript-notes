[Grunt][grnt_01]
================

1. [Intro](#s1)
2. [Installation](#s2)
3. [Executing Grunt](#s3)
4. [Setting up a Grunt Project](#s4)


<a name="s1"> </a>
1: Intro
--------
Grunt is a task runner. One such use is as a test runner for qUnit.


<a name="s2"> </a>
2: Installation
---------------
See also the official [Getting Started Guide][grnt_02].

### 2.1. Download ###
- Follow the [instructions][sann_01] to install node/npm/nvm
- Ensure that the selected version of node is at least [0.8.0][grnt_02].
- Install the Grunt CLI<sup>(#install_01)</sup>:
  ```console
  $ npm install -g grunt-cli
  /home/my_user/.nvm/versions/node/v10.14.2/bin/grunt -> /home/my_user/.nvm/versions/node/v10.14.2/lib/node_modules/grunt-cli/bin/grunt
  + grunt-cli@1.3.2
  added 152 packages from 119 contributors in 4.353s
  ```


<a name="s3"> </a>
3: Executing Grunt
------------------
See also the official [Getting Started Guide][grnt_02].

Assuming:
- Grunt CLI is installed,
- The project has a valid package.json,
- The project has a valid Gruntfile, then

You can execute a Grunt script as follows:
1. navigate to the project's root directory,
2. install any project dependencies with npm install,
3. run Grunt:
   ```console
   $ grunt
   ```


<a name="s4"> </a>
4: Setting up a Grunt Project
-----------------------------
See also the official [Getting Started Guide][grnt_02].

A typical setup involves adding, or amending, the following two files:
- `package.json` : this is used by npm to store project metadata. This includes
  Grunt-specific devDependencies;
- Gruntfile (`Gruntfile.js` or `Gruntfile.coffee`) : Used to configure or define
  tasks and load Grunt plugins.


X: Footnotes
------------
1. <a name="install_01> </a> The Grunt CLI only calls the appropriate
   version of Grunt for a particular Gruntfile, it is not Grunt itself.






[grnt_01]: https://gruntjs.com/
[grnt_02]: https://gruntjs.com/getting-started
[sann_01]: https://github.com/Crossroadsman/ServerAdmin/blob/master/node/node.md
