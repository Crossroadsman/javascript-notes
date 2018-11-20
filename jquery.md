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



jQuery-Specific Features
------------------------

### Animation ###

All jQuery animations have a default duration of 400ms.

Example:
```javascript
$('#flashMessage').hide().fadeIn(1000).delay(3000).slideUp(750);
```
