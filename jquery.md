JQuery and JavaScript
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
