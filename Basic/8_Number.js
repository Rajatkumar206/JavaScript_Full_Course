const score=2000;
// console.log(score);

const balance=new Number(2024);
// console.log(balance);

// console.log(balance.toString().length);// convert num to string
console.log(balance.toFixed(2));

const num1=23.5897552
// console.log(num1.toPrecision(4));
const num2=1000000000000;
// console.log(num2.toLocaleString('en-IN'))// for indian value

// ======= Math =================

console.log(Math.abs(-10));// execute only positive value
console.log(Math.round(5.6))// roundup value
 console.log(Math.random())// get value range 0 to 1
 console.log((Math.random()*10)+ 1)

 const min=1000

 const max=2000
 console.log(Math.floor(Math.random() *(max-min+1 )) +min); // get value in between range
 