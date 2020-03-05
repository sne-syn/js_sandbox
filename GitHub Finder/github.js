class GitHub {
    constructor() {
        this.client_id = 'bbb232a2d67340cc99d4';
        this.client_secret = 'fc1bf7676843c09433970f6e8cde14db4f2a0bab';
    }

    async getUser (user) {
        const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return {
            profile: profileData
        };
    }
}

console.log(GitHub);
