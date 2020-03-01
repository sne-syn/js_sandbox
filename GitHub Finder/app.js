const github = new GitHub();

const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (evt) => {
    const userText = evt.target.value;

    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {

                } else {

                }
            });
    } else {
        //  clear profile
    }
});