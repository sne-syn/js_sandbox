const github = new GitHub();

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', inputTypingHandler);

function inputTypingHandler(evt) {
    const userText = evt.target.value;

    if (userText !== '') {
        github.getUser(userText, callback);
        github.getRepo(userText, callback);
    }
}

function callback(error, response) {
    if (error) {
        console.log(error);
    } else {
        const userRep = JSON.parse(response);
        console.log(userRep);
    }

}