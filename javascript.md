JavaScript
==========

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

