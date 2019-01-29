JavaScript
==========

Objects
-------
In JS, everything is an object except:
- strings,
- booleans,
- numbers,
- undefined,
- null;
which are all primitives (cf languages like Python and Ruby where even basic 
types are objects).

Truth
-----
All values are truthy except:
- undefined,
- null,
- NaN,
- 0,
- "" (empty string).

`this`
------
The JavaScript context object in which the current code is executing.
12345678901234567890123456789012345678901234567890123456789012345678901234567890
Its value has nothing to do with the function itself, it is determined by how
the function is called.

The value can be overridden through `call()`, `apply()`, and `bind()`.

- the value is determined by how the function was called (TODO: Need examples);
- typically can't be set by assignment;
- arrow functions don't set their own `this`, they retain the value of the 
  enclosing lexical context;
- in the global context it refers to the global object;
- in function context (simple call):
  - if not set by call and not strict -> global,
  - otherwise -> whatever it was when entering execution context (undefined if
    not set in the outer context);
- can be passed between contexts by `call`/`apply`.

### Examples ###
Example 1a: Direct in global context
```javascript
console.log(this);
```

`this` refers to the global context

Example 1a: Direct in global context, strict
```javascript
'use strict';
console.log(this);
```

`this` is `undefined`


Example 2a: A classic/simple function (called from global)
```javascript
function myFunction() {
    console.log(this);
}

myFunction()
```

`this` refers to the global context

Example 2b: A classic/simple function (called from global), strict
```javascript
'use strict';
function myFunction() {
    console.log(this);
}

myFunction()
```

`this` is `undefined`


Example 3a: A method on an object, called directly
```javascript
function myFunction() {
    console.log(this);
}

var myObject = {};

myObject.f = myFunction;

myObject.f()
```

`this` refers to `MyObject`


Example 3bi: A method on an object, called indirectly
```javascript
function myFunction() {
    console.log(this);
}

var myObject = {};

myObject.f = myFunction;

var myFunc = myObject.f;

myFunc();
```

`this` refers to the global context

Example 3bii: A method on an object, called indirectly (strict)
```javascript
function myFunction() {
    console.log(this);
}

var myObject = {};

myObject.f = myFunction;

var myFunc = myObject.f;

myFunc();
```

`this` is `undefined`

Arrow Functions do not capture their enclosing context, they are permanently
bound to the context when created.

Example 4a: Arrow Function 
```javascript
var f = (() => console.log(this));

f()
```

`this` refers to the global object

Example 4b: Arrow Function (strict)
```javascript
'use strict'
var f = (() => console.log(this));

f()
```

`this` is `undefined`

Example 5a: (Like 3a except arrow function)
```javascript
var f = (() => console.log(this));

var myObject = {};

myObject.f = f;

myObject.f();
```

`this` refers to the global context

Example 6: Arrow function defined in object
(Not sure how to explain why this is what it is)
```javascript
var myObject = {
	f: () => console.log(this)
};

myObject.f();
```

`this` refers to the global context


Example 7: Arrow function assigned between objects
(The arrow function's scope is permanently bound to its original scope (i.e.
the same as Example 6))
```javascript
var myObject = {
	f: () => console.log(this)
};

var myOtherObject = {};

myOtherObject.f = myObject.f;

myOtherObject.f();
```

`this` refers to the global context

Example 8: Arrow function defined inside arrow function inside object
```javascript
var myObject = {
	f: () => {
      g = () => console.log(this)
      g()
    }
};

myObject.f();
```

`this` refers to the global context

Example 9: Regular function defined inside arrow function inside object
```javascript
var myObject = {
	f: () => {
      function g() {
        console.log(this);
      }
      g();
    }
};

myObject.f();
```

`this` refers to the global context

Example 10: Arrow function defined inside regular function inside object
```javascript
var myObject = {
	f: function () {
      g = () => console.log(this)
      g();
    }
};

myObject.f();
```

`this` refers to `myObject`


