// // regular function declaration.
// function myName() {
//   console.log('Prince');
// }

// // arrow function declaration.
// const myName2 = () => {
//     console.log('Prince');
// };
// myName2();
// myName();

// short syntax for arrow function. if we want return single value.
// const myName = () => "Prince";
// console.log(myName());


// short syntax for single onject return.
// const myName = () => ({fname: "Prince"});
// console.log(myName().fname);

//->  Default function argument 

// function myName(name){
//     console.log("My name is :", name);
// }
// myName();
// if we run this program now we get "My name is : undefined".
// because we don't passes the function argument in myName() method.
// In case don't get the result we want in that case we need some fallback value.
// which is used went we dont passes the argument to the funtion.

// function myName(name = "Prince"){
//     console.log("My name is : ", name);
// }

// myName();
// if we don't pass any argument to the function. the function uses the default argument.(name = "Prince").
// and if we passes the value to the function it uses that value not the default argument.
// eg. function myName(name = "Prince"){
//             console.log("My name is : ", name);
//         }

//         myName("Anmol");

function myName(name, age = 25){
    console.log("My name is : ", name, "and age is: " ,age);
}
myName("Prince");
// My name is :  Prince and age is:  25


