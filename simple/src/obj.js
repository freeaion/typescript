//let hat = {
//    name: "hat",
//    price: 100
//};
//
//let boot = {
//    name: "boot",
//    price: 200
//};
//
//let sumPrices = (...numbers) => numbers.reduce((total, value) =>
//    total + (Number.isNaN(value) ? 0 : Number(value)));
//
//let totalPrice = sumPrices(hat.price, boot.price);
//console.log(`total price is ${totalPrice} ${typeof totalPrice}`);
//
//let otherHat = { ...hat };
//console.log(`other hat: ${otherHat.name}`);
//
//let replaced = { ...otherHat, price: 10 };
//console.log(`replaced: ${replaced.price}`);
//
//let { price, ...something } = replaced;
//
//let myObject = {
//    greeting: "Hi there!",
//
//    getWriter() {
//        return (message) => console.log(`${this.greeting}. ${message}`);
//    }
//};
//
//greeting = "Hello!";
//
//let writer = myObject.getWriter();
//writer("It's rainy today");
//
//let standAlone = myObject.getWriter;
//let standAloneWriter = standAlone();
//standAloneWriter("it's sunny today");

//console.log("=================================");
//
//let myVar = "Global Level Variable";
//let myObject2 = {
//    myVar: "Object Level Variable",
//    arrowFunction: () => {
//        console.log(this.myVar);
//    },
//    regularFunction() {
//        console.log(this.myVar);
//    }
//};
//myObject2.arrowFunction();
//myObject2.regularFunction();
//let testFunction = myObject2.regularFunction;
//testFunction();

let myVar = "Global level var";
let arrowFunction = () => {
    console.log(this.myVar);
};
let arrowFunction2 = function() {
    console.log(this.myVar);
};

arrowFunction();
arrowFunction2();
