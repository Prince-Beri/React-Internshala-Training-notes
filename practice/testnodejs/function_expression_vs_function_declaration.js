// // function declaration
// function hello(){
//     console.log("Prince");
// }
// // function expression
// const hello2 = function(){
//     console.log("Prince");
// }

// // function calling
// hello();
// hello2();

// function calling
hello();
hello2();

// function declaration
function hello() {
  console.log('Prince');
}
// function expression
const hello2 = function () {
  console.log('Prince');
};

// output:
// Prince
// ReferenceError: Cannot access 'hello2' before initialization.
// because of hoisting.(move all the declaration part of the program to top of the code).
