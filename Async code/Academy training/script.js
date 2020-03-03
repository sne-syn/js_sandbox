// Create buttons
function createButton (name, clickHandler) {
    const button = document.createElement('button');
    button.textContent = name;
    
    button.addEventListener('click', clickHandler);
    return button;
}

// Create slider

function createSlider (sliderHandler) {
    const slider = document.createElement('div');

    slider.innerHTML = '<input type="range" min="1" max="100" value="50" class="slider">';

    slider.addEventListener('input', sliderHandler);
    return slider;
}

function render (element) {
    document.body.insertBefore(element, document.body.children[0]);
}

const sliderVolume = createSlider(function (evt) {
    console.log(`Volume: ${evt.target.value}`);
});
const sliderSize = createSlider(function (evt) {
    console.log(`Size: ${evt.target.value}`);
});

const logBtn = createButton('Log In', function () {
    console.log('click');
});

const alertBtn = createButton('Alert', function () {
    alert('click');
});

render(sliderSize);
render(sliderVolume);
render(alertBtn);
render(logBtn);