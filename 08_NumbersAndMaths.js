const score = 600
console.log(score)
// Alternate method

const num = new Number(800) // this syntax makes it sure that 800 is number
console.log(num)
console.log(typeof num) // but its type will be object when declared like this it means number is stored in object

console.log(num.toString().length) // number is now converted in string 
console.log(typeof num) //but type is still object it means now string is stored in a number


// <<<<<<< toFixed method >>>>>>> to fix in decimal place a number

const number = 45
console.log(number.toFixed(3)) // 3 shows upto three decimal places\

const rate = 45.8766
console.log(rate.toFixed(2))  // will fix upto two decimal place

// <<<<<<<<< toPrecision method >>>>>>> to precise the number

const aNumber = 134.536
console.log(aNumber.toPrecision(4))
console.log(aNumber.toPrecision(5))
console.log(aNumber.toPrecision(3))

// <<<<<<<<< toLocaleString >>>>>>> method to apply commas in number by US standard
const n = 10000000000
console.log(n.toLocaleString())


// <<<<<<<<<+++++++++ Maths ++++++++>>>>>>>>>

// 'Math' library is by default present in the JavaScript

console.log(Math)
console.log(Math.abs(-4)) // coverts negative num in positive : absolute value
console.log(Math.round(4.3)) // round of
console.log(Math.round(4.6)) // round of

console.log(Math.ceil(9.4))  // ceiling value
console.log(Math.floor(9.4)) // will give the floor value

console.log(Math.max(3,4,5,6)) // to get the max value in array
console.log(Math.min(3,4,5,6)) // to get the min value in array

console.log(Math.random()) // will always give a random decimal no. between 0 to 1 
console.log(Math.random()*10) 
/* since we have multiplied the random value by 10 it means now we will get
a no between 0 to 10  (the no might be 0 also so to avoid that case we can add 1) */

console.log("hello")

const max = 20
const min = 10

const result = ( Math.floor( Math.random()*10  + min ) )
console.log(result)
 


