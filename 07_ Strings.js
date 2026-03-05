
const name = "tarun"
const age= 22

// String addition
console.log( name + age + " is smart")

// Alternate way
console.log(`hello my name is ${name} and my age is ${age}`)

// Another method to  declare a string 

const str = new String("Hello")
console.log(str)
console.log(typeof str) // but this declaration will give the type of string as object.

console.log(str[0])

// Some methods of the string and their syntax

console.log(str.length)
console.log(str.toUpperCase())  // coverts the string into uppercase
console.log(str.indexOf('o'))   // method to check the index of the letter

let str3 = new String("TarunSharma")

// <<<<<< SUBSTRING function >>>>>    .substring(start, end)
let give = str3.substring(0,4) // this method is use to get substring from the string where ebd is not included
console.log(give)
//  but this function cannot have negative inputs

// <<<<<< SLICE function >>>>>>       .slice(start, end) 
let day = str3.slice(0,4) // use to slice the string but it could also get the negative values
console.log(day) 

let get = str3.slice( -8, 6)
console.log(get)   

/*  If start is negative, it counts from the end.

So:  -8 means: length - 8 → 11 - 8 = 3 → start from index 3 
end = 6 → stop at index 6 (but not including it)             */

// <<<<<< TRIM function >>>>>>>

const newStr = "    tarun     "
console.log(newStr)

console.log(newStr.trim()) // this "trim" function is use to trim the spaces.
// similarly there is also function known as "trim start" and "trim end" .


// <<<<<< REPLACE function >>>>>>>   .replace (what to replace ,  what is to be insert)

const url = "Tarun is a great man . He use to do things smartly"
console.log(url.replace("man" , "human being"))

// <<<<<< INCLUDES function >>>>>>>>
// checks weather a substring is present in the string or not

let  str5 = "How are you "
console.log(str5.includes("David"))

// <<<<< SPLIT Function >>>>>>> // onverting the string into an array
 
let str6 = "My-name-is-tarun"
console.log(str6.split("-"))   // splitting in the basis of -

let str7 = "my name is Rahul"
console.log(str7.split(" "))  // splitting on the basis of space