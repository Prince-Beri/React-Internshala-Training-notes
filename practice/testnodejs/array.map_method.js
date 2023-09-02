const hello = [4, 3, 2, 6];

// hello.map(function(val, idx, arr){
//     console.log(val, idx, arr);
// });

// const result = hello.map(function(val, idx, arr){
//     console.log(val, idx, arr);
// });

// console.log("result", result);

/*
output: 

4 0 [ 4, 3, 2, 6 ]
3 1 [ 4, 3, 2, 6 ]
2 2 [ 4, 3, 2, 6 ]
6 3 [ 4, 3, 2, 6 ]

result [ undefined, undefined, undefined, undefined ]
But the value are undefined for now why? 
    -> It's because we have to return some value from array.map() method which is the new values for our new array. If a function does not have a return value then that function returns undefined.
*/

const result = hello.map(function(val){
    return val * 2;
});

console.log(result);


