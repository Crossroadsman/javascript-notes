AJAX (Asynchronous JavaScript and XML)
======================================

Background
----------

- Technically, XMLHttpRequest (XHR) objects


Process
-------

1. create XHR object (tells browser to prepare for sending AJAX request);
2. define the callback function (and attach it to the `onreadystatechange`
   property of the XHR object);
3. open (prepare?) a request;
4. send the request.

Example:
```javascript
// step 1
let xhr = XMLHttpRequest();

// step 2
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        // do something with xhr.responseText;
    }
};

// step 3
xhr.open('GET', 'my_page.html');

// step 4
xhr.send();
```

Special Character Encoding
--------------------------

Encoding characters for query strings (GET requests):
- `&` -> `%26`
- ` ` (space) -> `+`
- `+` -> `%2B`

See also <www.url-encode-decode.com>


Response Formats
----------------

Typically:
- plaintext;
- html;
- XML;
- JSON.


Security Limitations
--------------------

Most browsers have a "same origin" policy that prevents ajax requests across
different:
- servers;
- hosts;
- ports;
- protocols (HTTP <-> HTTPS).

Workarounds:
- web proxy;
- JSONP (JSON with padding);
- CORS (cross-origin resource sharing).


