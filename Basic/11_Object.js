
// Singletone only by constructor

//Object Literal

// const sym=Symbol("key1");

// let obj={
//     Name:"Rajat",// keys:value
//     [sym]:"Tanu",
//     Age:24,
//     Place:"Remuna",
//     email:"xyz@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:["monday", "tuesday", "Sunday"]
// }
// // console.log(obj.Age)// old generation
// // console.log(obj["Name"])// take keys as string
// // console.log(obj[sym])//put squre bracket inside object and log 

// obj.email="rk@gmail.com";// change value in object
// // Object.freeze(obj);// freez... we cant change value in object
// obj.email="ttt@gmail.com"
// obj.Name="Saroj"
// obj.Place="hhh"
// // console.log(obj)
// // console.log(obj)

// obj.greeting=function () {
//     // console.log("Rajat KUmar Das")
// }
// console.log(obj.greeting())// output Undefind
// obj.greeting2=function(){
//     // console.log(`Hello , ${this.Name}`)
// }
// // console.log(obj.greeting2())
// // ===========================================================
// singletone Object

// const tinderUser=new Object()

// nonsingletone Object 
const tinderUser={}
tinderUser.id="255sff"
tinderUser.name="shanti"
tinderUser.isLoggedin=false

// console.log(tinderUser)

const regularUser={
    email:"ffff@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Rajat",
            lastName:"Kumar"
        }
    }
}
// console.log(regularUser.fullName?.userFullName.firstName)// we can access object value by using '.objectName'  and "?" for value is available or not
let obj1={
    1:"a",
    2:"b",
    3:"c",
    4:"d"
}
let obj2={
    5:"e",
    6:"f",
    7:"g"
}
// const obj3={obj1, obj2}

// const obj3=Object.assign({}, obj1, obj2)//join 2 or more objects by ..using assign() or use empty {}--target

const obj3={...obj1, ...obj2}// by spread Operator (...ObjectName)

// console.log(obj3)
const user =[
    {
        id:1,
        email:'hhh@gmail.com'
    },
    {
        id:2,
        email:"gdh@gmail.com"
    },
    {
        id:3,
        email:"gshdshd@gmail.com"
    }
]
console.log(user[2].email);//access object value in a array
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))// get value as a array
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))// get keys and values as array in a object
console.log(tinderUser.hasOwnProperty('isLogged in'))//search this value in object



