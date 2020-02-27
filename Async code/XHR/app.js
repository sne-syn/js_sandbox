'use strict';

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    // Used for loaders
    xhr.onprogress = function () {
        console.log('READYSTATE', xhr.readyState);
    };

    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    };

    // Error
    xhr.onerror = function () {
        console.log('Request error...');
    };


    xhr.send();
}

// readyState Values  
// console.log('READYSTATE', xhr.readyState)

// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready