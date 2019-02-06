Node.js
=======

[Node.js](https://nodejs.org/en/) is a JS runtime built on the V8 engine.

Installation
------------

### Remove Old Versions/Versions Installed Using Other Methods ###

1. `brew uninstall node`
2. remove any `node`, `npm` and `node_modules` from:  
   `/usr/local/lib`
   `/usr/local/include`
   `/Users/<username>/lib/`
   `/Users/<username>/local/`
   `/Users/<username>/include/`
3. remove any node or npm executable from:  
   `/usr/local/bin`
4. remove any `node`, `npm` and `node_modules` from:  
   `/opt/local/bin`
   `/opt/local/include`
   `/opt/local/lib`
   `/usr/local/bin`
   `/usr/local/share`
5. remove `node.d` from  
   `/usr/local/lib/dtrace`
6. Manually update the path variable if modified:  
   `~/.bashrc`
   `~/.profile`
7. remove `.npm` (directory) from  
   `~/`

### Installation ###
- Either curl/get the nvm install script (downloads nvm, installs node, updates 
  bash profile):  
  ```console
  $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
  ```

- or install manually:  
  1. Install nvm (Node Version Manager):  
     1. determine the latest tagged release version from the github page (in 
        this example v0.34.0)
     2. clone from the tag:  
        ```console
        ~ $ git clone -b v0.34.0 https://github.com/creationix/nvm.git .nvm
        ```
     You should end this stage with a clone of the nvm git repo as of the 
     tagged version in a repo with no branches and a single tag
  2. Add the following lines to bash profile (~/.bashrc or ~/.profile) (by 
     default macOS has `.profile` but not `.bashrc`):  
     ```shell
     # make the nvm directory env variable available to shell and children
     export NVM_DIR="$HOME/.nvm"
     
     # the following line tests (`[]` builtin works like the `test` command)
     # that the specified file exists and has a size > 0 (returns true (0) if
     # the test passes, false (1) otherwise) then conditionally source the
     # nvm.sh file to load nvm
     [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

     # then to enable bash completion for nvm commands:
     [ -s "$NVM_DIR/bash_completion.sh" ] && \. "$NVM_DIR/bash_completion"
     ```
   3. Close and reload the shell
   4. Install node (this will download, compile, install the latest version of 
      node):
      ```console
      $ nvm install node
      ```

See:
- https://yoember.com/nodejs/the-best-way-to-install-node-js/
- https://medium.com/@itsromiljain/the-best-way-to-install-node-js-npm-and-yarn-on-mac-osx-4d8a8544987a

