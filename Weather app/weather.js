class Weather {
    constructor (city, state) {
        this.apiKey = '7c648c0d4622a544debea7c9f30c1843';
        this.city = city;
        this.state = state;
    }

     async getWeather () {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},&APPID=${this.apiKey}`);
        const responseData = await response.json();
        return responseData;
    }

    changeLocation (city, state) {
        this.city = city;
        this.state = state;
    }
} 