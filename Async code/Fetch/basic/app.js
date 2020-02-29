const button = document.querySelector('#button');

let fetchHandler = () => {
    fetch('customer.json')
       .then(res => res.json())
       .then(json => console.log(json));
};

button.addEventListener('click', fetchHandler);

