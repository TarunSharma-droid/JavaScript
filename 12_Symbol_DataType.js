// ?<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< SYMBOL >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// it is also a primitive data type like string
// symbols is usefull in making the unique keys which could be used in the objects.

const a = "Tarun"
const b = "Tarun"

console.log(a===b) // gives true as both are strings and have the same value

// But this is not true for symbol . In symbol same value and same type also
// gives the false result because all symbols are unique.

const sym1 = Symbol("virat")
const sym2 = Symbol("virat")

console.log(sym1 === sym2) // returns false result.

const k1 = Symbol() // defining a key k1 as symbol
const k2 = Symbol() // defining a key k2 as symbol

// we can all give the value in bracket also know as identifiers
// these keys could be used in the any object. For example

myObj = {} // defining an object which is initially empty and of literal type (non singleton)

myObj[k1] = "Tarun" // using the key k1 in the object myObj and assigning its value. 
myObj[k2] = "Sharma" // using the key k2 in the object myObj

// Note that if we want to use the symbols as the key in the object then we cannot use them by the simple
// method . We have to use the bracket method [] only .

console.log(myObj)
console.log(myObj[k1]) // only have to use the bracket syntax and not the dot syntax to access the key which is symbol type.
console.log(myObj[k2])


console.log(myObj.k1) // defined as symbol because here k1 is considered as an independent variable
// which is not defined by us. { gives undefined result }  

console.log(typeof k1) 





