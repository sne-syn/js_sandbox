const github = new GitHub();
const ui = new UI();

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (evt) => {
    const userText = evt.target.value;

    if (userText !== '') {

        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                   ui.showProfile(data.profile);
                   ui.showRepos(data.repos);
                }
            });
    } else {
       // clear profile
       ui.clearProfile();
    }
});