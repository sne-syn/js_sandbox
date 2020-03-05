const github = new GitHub();

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (evt) => {
    const userText = evt.target.value;

    if (userText !== '') {

        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show alert
                } else {
                    // Show profile
                }
            });
    } else {
       // clear profile
    }
});