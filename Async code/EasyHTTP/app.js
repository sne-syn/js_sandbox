const http = new easyHTTP();

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) {
    if (error) {
        console.log(error);
    } else {
        console.log(posts);
    }
});

// Get Single Post 

// http.get('https://jsonplaceholder.typicode.com/posts/1', function (error, post) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

// POST

const data = {
    title: 'Custom post',
    body: 'This is a custom post'
};

http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, post) {
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
});

// PUT update

// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function (error, post) {
//         if (error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });


// DELETE 

// http.delete('https://jsonplaceholder.typicode.com/posts/3', function (error, response) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// });