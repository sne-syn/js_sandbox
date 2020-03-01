const http = new EasyHTTP();

//  http.get('http://jsonplaceholder.typicode.com/users')
//  .then (data => console.log(data))
//  .catch(err => console.log(err));

 
// POST

const data = {
    name: 'John',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
};

//  http.post('http://jsonplaceholder.typicode.com/users', data)
//  .then (data => console.log(data))
//  .catch(err => console.log(err));

// http.put('http://jsonplaceholder.typicode.com/users/2', data)
// .then (data => console.log(data))
// .catch(err => console.log(err));

http.delete('http://jsonplaceholder.typicode.com/users/2')
.then (data => console.log(data))
.catch(err => console.log(err));