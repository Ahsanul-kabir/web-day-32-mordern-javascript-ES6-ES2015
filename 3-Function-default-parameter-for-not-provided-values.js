// function add(num1, num2) {
//     return num1 + num2;
// }
// const total = add(15, 20);
// console.log(total);

function add(num1, num2) {
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    num2 = num2 || 0;
    return num1 + num2;
}
const total = add(15);
console.log(total);

// By ES6 we can wirte == default parameter
function add(num1, num2 = 0) {
    return num1 + num2;
}
const total2 = add(15);
console.log(total2);

const total3 = add(15, 5);
console.log(total3);