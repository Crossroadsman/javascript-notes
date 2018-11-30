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

