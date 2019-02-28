ReactJS
=======

**Warning: React is a Facebook property. Look at replacing with something like 
Vue.js**


Background
----------

- At its core, React is only a library for creating and updating HTTP elements
in your UI.
- React "elements" are the smallest building blocks of React apps.


JSX
---

- JSX is a syntax extension to JavaScript.
- JSX produces React "elements".

Example:
```jsx
const element = <h1>Hello, world</h1>;
```

Example with embedded expressions (any valid JS can go inside the curly braces):
```jsx
const name = "Jake the Dog";
const element = <h1>Hello, {name}</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
