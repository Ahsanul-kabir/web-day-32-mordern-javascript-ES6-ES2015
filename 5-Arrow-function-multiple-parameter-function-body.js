// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }


// single parameter
const doubleIt = num => num * 2;
const result1 = doubleIt(2);
console.log(result1);

// multiple parameter
const add = (num1, num2) => num1 + num2;
const result2 = add(5, 5);
console.log(result2);

// without parameter
const give5 = () => 5;
result3 = give5();
console.log(result3);


// for write big function
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    result = sum * diff;
    return result;
}
const result4 = doMath(10, 5);
console.log(result);