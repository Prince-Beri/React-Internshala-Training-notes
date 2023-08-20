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

import cowsay from "cowsay";

console.log(
    cowsay.say({
        text: "I'm a moooodule",
        e: "oO",
        T: "U ",
    })
);