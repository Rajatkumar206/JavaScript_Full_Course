//  date
const myDate= new Date()
// console.log(myDate.toString())// defult date
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)
const birthday=new Date(2000, 2, 14, 12, 5)
// console.log(birthday)
// console.log(birthday.toDateString())
 let bday=new Date("03-14-200")
//  console.log(bday.toLocaleString())

//  tome stamp
let t=Date.now()
console.log(bday.getTime())
console.log (Math.floor(Date.now()/1000))
let newDate=new Date()
console.log(newDate.getMonth()+1)