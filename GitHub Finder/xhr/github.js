class GitHub {
    constructor() {
        this.client_id = 'bbb232a2d67340cc99d4';
        this.client_secret = 'fc1bf7676843c09433970f6e8cde14db4f2a0bab';
    }

    getUser(user, callback) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`, true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                callback(null, this.responseText);
            } else {
                callback('error ' + 'we got');
            }
        };

        xhr.onerror = function () {
            console.log("** An error occurred during the transaction");
        };

        xhr.send();
    }

    getRepo(user, callback) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', `https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`, true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                callback(null, this.responseText);
            } else {
                callback('error ' + 'we got');
            }
        };

        xhr.onerror = function () {
            console.log("** An error occurred during the transaction");
        };

        xhr.send();
    }
}

console.log(GitHub);
