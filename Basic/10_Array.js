let arr=['Rajat','Rajnu','kunal','tanu', 'tanu']
let arrnum=[1,2,3,4,5,6,7,8,9,0]
console.log(arr)

// arr.push(6) // add value in last position
// arr.pop()// remove last value
// arr.unshift(1)// insert value 1st position
// arr.shift()// remove value 1st postion
// console.log(arr.includes(3))// find value

let arr1=arr.join() // convert to string


console.log("rajat " ,arr)

//slice and splice
// *************************************************
arr.push(arrnum)
console.log(arr)
arr.concat(arrnum)
console.log(arr)

let newarr=[...arr,...arr1]
console.log(newarr)