// Object and array destructuring.

// syntax 1 without using additional variables.
// const car = {
//     carName: "THAR 4X4",
//     color: "black",
//     enginType: "petrol",
//     model: "thar",
// }

// const {color, enginType, model, carName} = car;

// console.log("car name: ", carName);
// console.log("car model: ", model);
// console.log("car engin: ", enginType);
// console.log("car color: ", color);

// syntax 2 with addition variables.

// const car = {
//     carName: "THAR 4X4",
//     model: "Thar",
//     color: "black",
//     enginType: "petrol"
// }

// const {carName: cName, enginType: cType} = car;

// console.log("car name: ", cName);
// console.log("engin type is: ", cType);

// Object destructuring with default arguments.

const car = {
    carName: "THAR 4X4",
    carModel: "mahindra thar",
    color: "black",
    enginType: "petrol",
    gears: 6
}

const someFunction = (carObj = {}) => {
    const {carName, carModel, color, enginType, gears} = carObj;

    console.log("car name: ", carName);
    console.log("car model: ", carModel);
    console.log("car color: ", color);
    console.log("car enginType: ", enginType);
    console.log("no. of gears: ", gears);
}

someFunction(car);