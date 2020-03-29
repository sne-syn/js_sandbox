const apiKey = '92520e7cd61bfeaca3d7b2096ba8ab35';
const city = 'Alicante,es';

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        console.log(data);
        document.querySelector('#w-location').textContent = data.name;
        document.querySelector('#w-desc').textContent = data.weather[0].description;
        document.querySelector('#w-string').innerHTML = Math.round(data.main.temp) + '&deg;C';

        document.querySelector('#w-icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        document.querySelector('#w-humidity').textContent = `Relative Humidity: ${data.main.humidity}`;

        document.querySelector('#w-pressure').textContent = `Pressure: ${data.main.pressure}`;

        document.querySelector('#w-feels-like').innerHTML = `Feels Like:  ${Math.round(data.main.feels_like)}&deg;C`;

        document.querySelector('#w-wind').textContent = `Wind: ${data.wind.speed}`;
    })

    .catch(function () {
        // catch any errors
    });
