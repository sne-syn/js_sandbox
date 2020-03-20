function HtmlElement() {
    this.click = function () {
        console.log('clicked');
    };

    this.render = function () {
        console.log('Render smth');
    };
}

HtmlElement.prototype.focus = function () {
    console.log('focused');
};

//HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

function HtmlSelectElement(items = []) {
    // HtmlElement.call(this);

    this.items = items;

    this.addItem = function (value) {
        this.items.push(value);
    };
 
    this.removeItem = function (value) {
        const position = this.items.indexOf(value);
        this.items.splice(position, 1);
    };

    this.render = function () {
        return `
        <select>
            ${this.items.map(item => `<option>${item}</option>`).join('')}
        </select>`;
    };
}

function HtmlImageElement(src) {
    this.src = src;
    this.render = function () {
        return ` < img src = "${this.src}" / > `;
    };
}

const elements = [
    new HtmlSelectElement(['1', '2', '5']),
    new HtmlImageElement('http://')
];

for (let element of elements) {
    element.render();
}

const s = new HtmlSelectElement(['1', '2', '5']);
const img = new HtmlImageElement('http://');