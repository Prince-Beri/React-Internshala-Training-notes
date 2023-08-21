// export in common js

// const myName = "Prince";
// module.exports = {
//     // variable: value
//     // myName: myName

//     // if both has same name we can directly write variable name.
//     myName
// }

// export in EcmaScript Module.

// const myName = "Prince";
// export { myName };

//  cowsay is module which print the cow inside terminal window.
import cowsay from 'cowsay';

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: 'oO',
    T: 'U '
  })
);
