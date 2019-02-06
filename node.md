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

### Install nvm ###

See:
https://yoember.com/nodejs/the-best-way-to-install-node-js/
https://medium.com/@itsromiljain/the-best-way-to-install-node-js-npm-and-yarn-on-mac-osx-4d8a8544987a

