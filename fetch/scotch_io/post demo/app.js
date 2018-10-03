const url = 'https://randomuser.me/api';

// request data for putting in the body of the POST request
const data = {
    name: 'Sara'
}

// the parameters for creating the POST request
// for Headers see https://developer.mozilla.org/en-US/docs/Web/API/Headers
const fetchData = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

const jsonify = (fetchResponse) => {
    if (fetchResponse.ok) {
        return fetchResponse.json();
    } else {
        // can either throw Error or reject the Promise
        console.log('server responded with an error code');
        rejection_data = {
            status: fetchResponse.status,
            statusText: fetchResponse.statusText
        }
        return Promise.reject(rejection_data);
    }
    
}

const addToPage = (jsonData) => {
    console.log("processing JSON");
    console.log(jsonData);
}

const fetchError = (err) => {
    if (err.status === 404) {
        console.log("Server returned 404: Not Found");
    } else {
        console.log(err);
    }
}

console.log('making fetch request');
fetch(url, fetchData)
.then(jsonify)
.then(addToPage)
.catch(fetchError);
console.log('made fetch request');
