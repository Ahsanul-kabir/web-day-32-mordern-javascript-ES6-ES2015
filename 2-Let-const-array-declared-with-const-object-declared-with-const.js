const habby = "Elias Kanson";
console.log(habby);

// const habby = "Omit Hasan";  => give error coz const ahange kora jai nah
//console.log(habby);

const numbers = [10, 20, 30, 40];
console.log(numbers);

numbers[1] = 60; // ==> const hole specific element change kora jai
numbers.push(500);
console.log(numbers);
//const numbers = [100, 200, 300, 400];  // ===> full array change kora jai nah

const nayok = { name: 'Sakib khan', position: 'NO 1 hero' }; // eita o same Array er moto kaj korbe


// ------> For Change
// let = scope variable
let patentName = 'Rahim Cacha';
console.log(patentName); // changeable

patentName = 'Farid Uncle';
console.log(patentName);

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
    console.log(i); // let  er jonno bahire pabe nah = lik hobe nah
}

sum2 = 0
for (var index = 0; index < 500; index++) {
    sum2 = sum2 + index;
}
console.log(index); // var er jonno bahire pabe