const ul = document.querySelector('#authors');
const url = 'https://randomuser.me/api/?results=10';

const createNode = (element) => {
    return document.createElement(element);
}

const append = (parent, element) => {
    return parent.appendChild(element)
}

const authorToLi = (author) => {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');

    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`; // template literal: JS's equivalent to string interpolation
    append(li, img);
    append(li, span);
    return li;
}

const jsonify = (fetch_response) => {
    /* the fetch data inside the promise response isn't json but instead is
       an object to which we can apply various methods, including .json()
       which gives us the json values */
    return fetch_response.json();
}

const response = (json_data) => {
    let authors = json_data.results;
    authors.map( (author) => {
        const li = authorToLi(author);
        append(ul, li);
    });
}

const err = (data) => {
    // handle the error case from the fetch
    console.log(data);
}

fetch(url)
.then(jsonify)
.then(response)
.catch(err);