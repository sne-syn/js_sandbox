document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(evt) {

  const number = document.getElementById('number').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onerror = function () {
    console.log("** An error occurred during the transaction");
  };

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response.type);
      let output = '';

      if (response.type === 'success') {
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  };

  xhr.send();

  evt.preventDefault();
}