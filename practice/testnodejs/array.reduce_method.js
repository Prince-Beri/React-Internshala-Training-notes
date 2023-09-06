const hello = [7, 4, 9, 4, 5];

// const result = hello.reduce(function(prevVal, curVal){
//     console.log(prevVal, curVal);
//     return prevVal + curVal;
// }, 0);

// output: 0 7
// 7 4
// 11 9
// 20 4
// 24 5
// result 29

const result = hello.reduce(function(acc, curVal, curIdx){
    const mappedElem = {};
    mappedElem[curIdx] = curVal;
    return Object.assign(acc, mappedElem)
}, {});

console.log('result', result);

// output: result { '0': 7, '1': 4, '2': 9, '3': 4, '4': 5 }