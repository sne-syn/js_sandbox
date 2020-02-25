// let DISCOUNT = 20;

// function Bicycle (brand, model, price, mark, type) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//     this.mark = mark;
//     this.type = type;
// }

// Bicycle.prototype.checkDiscount = function () {
//     return Math.round(this.price - (this.price / 100 * DISCOUNT));
// };

// const bicycle1 = new Bicycle ('Santa Cruz', 'Tallboy', 989.99, 'besteseller', 'mountain');

// console.log(bicycle1);
// console.log(bicycle1.checkDiscount());

// function demoBicycle (brand, model, price, mark, type, year) {
//  Bicycle.call(this, brand, model, price, mark, type);
//  this.year = year;
// }

// demoBicycle.prototype = Object.create(Bicycle.prototype);
// demoBicycle.prototype.constructor = demoBicycle;

// const demoBicycle1 = new demoBicycle ('Pure Fix', 'PREMIUM SPEED BIKE', 569.99, 'new', 'touring',  2017);


// console.log(demoBicycle1);
// console.log(demoBicycle1);

// / Next exercise

// const bicyclePrototype = {
//     checkDiscount: function (discount) {
//         return `Check your discount ${Math.round(this.price - (this.price / 100 * discount))}`;
//     },

//     getMoreInfo: function () {
//         return `We are glad to present you our ${this.mark} model of ${this.brand} bicycle. This ${this.model} model is a great for ${this.type} activity.`
//     }
// };

// const bicycle1 = Object.create(bicyclePrototype);
// bicycle1.brand = 'Santa Cruz';
// bicycle1.model = 'Tallboy';
// bicycle1.price = 989.99;
// bicycle1.mark = 'new';
// bicycle1.type = 'mountain';

// console.log(bicycle1);
// console.log(bicycle1.checkDiscount(30));
// console.log(bicycle1.getMoreInfo());

// const bicycle2 = Object.create(bicyclePrototype, {
//     brand: {
//         value: 'Pure Fix'
//     },
//     model: {
//         value: 'PREMIUM SPEED BIKE'
//     },
//     price: {
//         value: 569.99
//     },
//     mark: {
//         value: 'new'
//     },
//     type: {
//         value: 'touring'
//     },
//     year: {
//         value: 2017
//     }
// });

// console.log(bicycle2.hasOwnProperty());
// console.log(bicycle2.checkDiscount(30));
// console.log(bicycle2.getMoreInfo());


// ES6 classes

class Bicycle {
    constructor(brand, model, price, mark, type) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.mark = mark;
        this.type = type;
    }

    getMoreInfo() {
        return `We are glad to present you our ${this.mark} model of ${this.brand} bicycle. This ${this.model} model is a great for ${this.type} activity.`;
    }

    checkDiscount(discount) {
        return `Check your new price ${Math.round(this.price - (this.price / 100 * discount))}`;
    }

    static itemDiscount (num) {
        return num +'%';
    }
}

const bicycle1 = new Bicycle('Pure Fix', 'PREMIUM SPEED BIKE', 569.99, 'new', 'touring');
bicycle1.getMoreInfo();
bicycle1.checkDiscount(30);

console.log(bicycle1);
console.log(bicycle1.getMoreInfo());
console.log(bicycle1.checkDiscount(30));
console.log(Bicycle.itemDiscount(30));

class DemoBicycle extends Bicycle {
    constructor (brand, model, price, mark, type, year, condition) {
        super(brand, model, price, mark, type);

        this.year = year;
        this.condition = condition;
    }

    static getMembershipType() {
        return 'premium';
    }
}

const demo = new DemoBicycle('Santa Cruz', 'Tallboy', 989.99, 'besteseller', 'mountain', 2017, 'satisfactory');

console.log(demo);
console.log(demo.getMoreInfo());
console.log(demo.checkDiscount(30));
console.log(DemoBicycle.getMembershipType());