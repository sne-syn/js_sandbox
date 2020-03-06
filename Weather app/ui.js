class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    paint (response) {
        this.location.textContent = response.name;
        this.desc.textContent = response.weather[0].description;
        this.string.textContent = Math.round(response.main.temp) + '°C';
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${response.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${response.main.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${Math.round(response.main.feels_like)}°C`;
        this.pressure.textContent = `Pressure: ${response.main.pressure}`;
        this.wind.textContent = `Wind: ${response.wind.speed}m/s`;
    }
}