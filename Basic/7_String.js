const name="Rajat"
let age=24;
// console.log("Myname is " +name + " and My age is" + age); //old generation
console.log(`My name is ${name} and my age is ${age}`); // letest

const newName=new String('Rajat_das_rk')// another type to write string
console.log(newName);
console.log(newName[2]); // index position

// console.log(newName.length);
// console.log(newName.charAt(2));
// console.log(newName.indexOf("a"));
// console.log(newName.toLocaleUpperCase())

// 11 num vidio
const first= newName.substring(0,3);// ignor negative value
console.log(first);

const anotherstr=newName.slice(-3, -1) // Reverse string we can put minus vakue also
console.log(anotherstr);

const str2= "     Rajat           ";
console.log(str2);
console.log(str2.trim());// ignor all spaces

const url=" https://rajat.com/rajat%25das";
console.log(url.replace('%25', '_'));// replace name

console.log(url.includes('rajat'));// find name

console.log(newName.split('_',2));// use separator and limit




