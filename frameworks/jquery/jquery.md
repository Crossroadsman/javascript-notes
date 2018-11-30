jQuery
======

Basic DOM Manipulation
----------------------

### Basic Syntax ###
`$` is an alias for `jQuery`.

Selection methods can be chained. For example:
```javascript
/* Make a selection that is a group comprising the parent element of
   each `div` where none of its classes are in the list [`type`, `collection`] 
*/
$('div').not('.type, .collection').parent();
```

#### `this` ####

##### In Vanilla JavaScript #####
See: [javascript.md][js_01]

##### In jQuery #####

TODO

#### `window.onload` vs `document.ready` ####
`window.onload` means the page has fully loaded, `document.ready` means the DOM 
is available for manipulation.

We can use `document.ready` as follows:
```javascript
$(document).ready( function() {
   console.log('READY');
});
```

Wrapping in `document.ready` is so common in jQuery that `$()` is an alias for
`$(document).ready()`, thus we can rewrite the previous example as:
```javascript
$( function() {
   console.log('READY');
});
```

#### Selection Basics ####

In jQuery (and in JS), selectors will only contain elements that existed at the
time the selection was made.

Note that jQuery selectors (like JS selectors, at least 
`document.getElementsByClassName` and `document.querySelectorAll`) always 
return an object, even if there were no matches.

This means that any selection, even if empty, will be truthy. This impacts how
we write conditional code based on whether selectors find any matches.

Example:
```javascript
if ( $('#NonExistentId').length ) {
   // code goes here
}
```

jQuery selectors return jQuery objects not DOM nodes nor HTML objects.

This allows us to use jQuery-specific methods to modify selections:
```javascript
const listItems = $('li');
const specials = listItems.filter('.special');
const notSpecials = listItems.not('.special');
const hasSpans = listItems.has('span');
```

##### [`filter`][jq_api_01] vs [`has`][jq_api_02] #####
Both methods reduce a selection by the supplied argument. In `filter` the 
supplied argument can be either a selector to match, or a function. In
`has` the supplied argument must be a selector to match.

For `filter`, a selector argument should be a selector on the filtered object
while for `has`, a selector argument should be a selector on descendents of
the filtered object.


### Hiding an Element ###

- **JavaScript**
  ```javascript
  document.querySelector('.box').style.display = 'none';
  ```
- **jQuery**  
  ```javascript
  $('.box').hide();
  ```

### Adding a Click Event Listener ###

- **JavaScript**
  ```javascript
  document.querySelector('.box').addEventListener('click', () => {
      alert("You clicked");
  });
  ```
- **jQuery**
  ```javascript
  $('.box').click( () => {
    alert("You clicked");
  });
  ```

With jQuery we can trivially create an event handler that can handle multiple event types using `on`:
```javascript
$('#myId').on('click keypress', () => {
  // do something
});
```

Note that the events are a space-separated list in a string.



### Append / Prepend ###

```javascript
$('.spoilers').append($element);
```

Notes:
- the first item (here 'spoilers') is the element being appended to;
- the item being passed into append is the element being appended;
- the item being appended can be any of:
  - htmlString;
  - element;
  - text;
  - array;
  - jQuery object
- by convention, variables that refer to jQuery objects typically begin with a `$`. For example:
  ```javascript
  let $newStudent = $("<li>Alice Roberts</li>");
  ```



### Getting and Setting ###

#### Getter (using innerHTML property) ####
  
- **JavaScript**
  ```javascript
  document.querySelector('#my_id').innerHTML;
  ```
- **jQuery**
  ```javascript
  $('#my_id').html();
  ```
  
#### Setter ####
(Note that with jQuery we can use `text` instead of `html` to work with the element's textContent instead of innerHTML)

- **JavaScript**
  ```javascript
  document.querySelector('#my_id').innerHTML = '<p>I am setting this HTML.</p>';
  ```
- **jQuery**
  ```javascript
  $('#my_id').html('<p>I am setting this HTML.</p>');
  ```

### Forms ###

#### Obtaining a Value from a Form Field ####

- **jQuery**  
  ```javascript
  $('#myInputField').val();
  ```

### Events ###

#### Event Delegation ####

Like regular JavaScript, in jQuery we can attach an event listener to an element's parent which will enable us to capture events from
dynamically added elements.

#### The Event Object ####

The event object is especially useful for extracting the type of an event and its target.

In jQuery, `this` is an alias for the `event.target`.



jQuery-Specific Features
------------------------

### Animation ###

All jQuery animations have a default duration of 400ms.

Example:
```javascript
$('#flashMessage').hide().fadeIn(1000).delay(3000).slideUp(750);
```



[js_01]: https://github.com/Crossroadsman/javascript-notes/blob/master/javascript.md
[jq_api_01]: https://api.jquery.com/filter/ 'jQuery API: filter()'
[jq_api_02]: https://api.jquery.com/has/ 'jQuery API: has()'
