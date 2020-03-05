class Weather {
    constructor (city, state) {
        this.apiKey = '7c648c0d4622a544debea7c9f30c1843';
        this.city = city;
        this.state = state;
    }

    // getWeather () {
    //     const xhr = new XMLHttpRequest();

    //     xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7c648c0d4622a544debea7c9f30c1843', true);

    //     xhr.onload = function () {
    //         if (xhr.status === 200) {
    //             console.log(xhr.responseText);
    //         }
    //     };

    //     xhr.send();
    // }

    //https://openweathermap.org/current

    
     async getWeather () {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},&APPID=${this.apiKey}`);
        const responseData = await response.json();
console.log(responseData)
        return responseData;
    }

    changeLocation (city, state) {
        this.city = city;
        this.state = state;
    }
} 