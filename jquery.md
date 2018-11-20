JavaScript and jQuery
=====================


Basic DOM Manipulation
----------------------

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
