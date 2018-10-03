const url = 'https://randomuser.me/api';

// request data for putting in the body of the POST request
const data = {
    name: 'Jake'
}

// the parameters for creating the POST request
// for Headers see https://developer.mozilla.org/en-US/docs/Web/API/Headers
const fetchData = {
    method: 'POST',
    body: data,
    headers: new Headers()
}

const jsonify = (fetchResponse) => {
    return fetchResponse.json();
}

const addToPage = (jsonData) => {
    console.log("processing JSON");
    console.log(jsonData);
}

const fetchError = (err) => {
    console.log(err);
}

console.log('making fetch request');
fetch(url, fetchData)
.then(jsonify)
.then(addToPage)
.catch(fetchError);
console.log('made fetch request');
