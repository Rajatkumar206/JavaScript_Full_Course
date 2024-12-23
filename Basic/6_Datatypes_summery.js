// =====Primitive Datatypes===========
// 
//1. number=>2 to the power 53
//2. bigInt
//3. string=>  ""
//4. Boolean = true/ false
//5. null (standlon Value)= empty value => it is a object
//6. undefind= not asigned value
//7.symbol => Unique
let id=Symbol('123');
let id2=Symbol('123')
console.log(id===id2);

let biginte=122222n;
console.log(typeof(biginte));



// =========== Non Primitive Datatypes/ Reference type============
//1. Object
// 2. Array
// 3. Functions

const frnd=["Raju", "raj", "Farhan", "Tanu"]// array example
const prof={
    name:"raj",
    age:24,
    gender:male
}// Object Example

// variable type function
const Idea = function (){
    console.log("Hello World");
}
// ++++++++++++++++++++++++++++++++++++ Memory +++++++++++++++++++++++++++++++++++++++++++++
// 1. stack memory (Primitive)
// 2. heap memory (Non primitive)

