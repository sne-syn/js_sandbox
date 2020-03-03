// const posts = [{
//     title: 'Post One',
//     body: 'This is post one'
//   },
//   {
//     title: 'Post Two',
//     body: 'This is post two'
//   }
// ];

// function createPost(post) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       posts.push(post);
//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject('Error...');
//       }
//     }, 2000);
//   });
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({
//   title: 'Post Three',
//   body: 'This is post three'
// }).then(getPosts).catch(function (error) {
//   console.log(error);
// });

const userLeft = false;
const userWatchingCats = false;

function watchTuturialCallback(callback) {
  if (userWatchingCats && userLeft) {
    callback("booo");
  } else if (userWatchingCats) {
    callback('sad');
  } else if (userLeft) {
    callback('(');
  } else {
    callback(null, 'Happy)');
  }
}

function callback(err, succes) {
  if (err) {
    console.log(err);
  } else {
    console.log(succes);
  }
}

watchTuturialCallback(callback);