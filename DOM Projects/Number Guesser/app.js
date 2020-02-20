let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-value');
const message = document.querySelector('.message');

guessBtn.addEventListener('click', checkAnswer);
game.addEventListener('mousedown', function (evt) {
    if (evt.target.className === 'play-again') {
        window.location.reload();
    }
});

function setRules() {
    minNum.textContent = `${min}`;
    maxNum.textContent = `${max}`;
}
setRules();

function setMessage(messageText, colorStyle) {
    message.textContent = messageText;
    message.style.color = colorStyle;
}

function gameOver(won, messageText) {
    let colorStyle;
    won === true ? colorStyle = 'green' : colorStyle = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = colorStyle;
    message.style.color = colorStyle;
    setMessage(messageText);

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function checkAnswer() {
    guessValue = parseInt(guessInput.value, 10);
    if (isNaN(guessValue) || guessValue > max || guessValue < min) {
        setMessage(`Please enter a number between  ${min} and ${max}`, 'red');
    } else if (guessValue === winningNum) {
        gameOver(true, `${winningNum} is correct! YOU WIN!`);
    } else {
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } else {
            guessInput.style.borderColor = 'red';
            setMessage(`${guessValue} is not correct, ${guessesLeft} guess left`, 'red');
        }
    }
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}