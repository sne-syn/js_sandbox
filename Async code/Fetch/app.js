document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getAPI);


// function getText() {
//   fetch('test.txt')
//     .then (res => res.text())
//     .then (data => {
//       document.getElementById('output').innerHTML = data;
//     })
//     .catch(err => console.log(err));
// }

function getText() {
  fetch('test.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
    });
}

function getJson() {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(item => {
        output += `<li>${item.title}</li> <p>${item.body}</p>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

function getAPI() {
  fetch('https://api.github.com/users')
  .then(res => {
      if (!res.ok)
        throw Error(
          `It all went horribly wrong!!: ${res.status} ${res.statusText}`
        );
      else return res.json();
    })
    .then(data => {
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}
