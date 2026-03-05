// <<<<<<<< Arrays >>>>>>>>>>>

// In JS arrays are resizeable < we can change the size of array once defined >

const Array1 = [61,42,35,434,55, true, "Tarun"] // arrays in JS can have no, strings , bool values or all
console.log(Array1)
console.log(typeof Array1) // the type of array is object in JS as it is non primitive datatype.
console.log(Array1[6])

// Alternate way to declare an array
const Array2 = new Array(43, 45, 42,48,49)

console.log(typeof Array2)

// <<<<<<<<< Methods of array >>>>>>>>>

// 1} adding the element in the array ( new element will get add up in the last )
Array1.push(72)
console.log(Array1)

// 2} remove the last element of the array : no arragument is given here
Array1.pop()
console.log(Array1)

// 3} UNSHIFT operation : adding element on index zero and shifting all other elements
Array1.unshift( "BigDaddy")
console.log(Array1)

const Array3 = [ 34,56,true,5678,"lmfao",false,45]

// 4} SHIFT  operation : removing the element on index zero of array : no arrgument is given here also
Array3.shift()
console.log(Array3)

console.log(Array3.includes(4)) // give boolean result
console.log(Array3.indexOf(34)) // gives -1 as 34 is removed from the array
console.log(Array3.indexOf("lmfao")) // gives 3

// 5} JOIN operation : Copying element of old array to a new array
const Array4 = Array3.join()
console.log(Array4)
// ******But note the type of new array will be "string" and not object.
console.log(typeof Array4)


// 6} Slice Function

const Array5 = [21,22,23,24,25,26]

const testArray = Array5.slice(1,4) // will takes the element from index 1 to 3 (4 not included)
console.log(testArray)
console.log(Array5) // original array will remains unchanged.

// 7} Splice Function  

const  Array6 = [30,31,32,33,34,35]

const testArray2 = Array6.splice(1,4) 
/* will takes the element from the index 1 to 4 ( 4 is also included ) and 
also manipulates the original array ( original array will now only have the
remaining elements.   */
console.log(testArray2)
console.log(Array6)


// 8} <<<<<<<< Merging two arrays >>>>>>
const marvel_heroes = [ "thor","captin_america","ironman","spiderman"]
const DC_heroes = ["superman" , "antman" , "flash" , "batman"]

marvel_heroes.push(DC_heroes)
console.log(marvel_heroes)
// DC_heroes will now becomes an element of the marvel_heroes array (but arrays have not merged properly) 
console.log(marvel_heroes[4]) // prints the new element of the array that is DC_heroes.

// 9} Alternate method  <<<<< CONCAT method >>>>>>
const arr = [1,23,4]
const combined = marvel_heroes.concat(arr) /* "concat" does not modifies the old array . it return a new one 
so we have to save its result ( here we have used combined to save the result ) otherwise we will not see any changes */
console.log(combined) 

// CONCLUSION --->>> PUSH makes change in the existing array but CONCAT return a new array]

// 10}  BEST WAY : for adding two arrays 
const new_heroes = ["Tarun","Naman","Brijesh"]
const all_New_heroes = [...new_heroes, ...DC_heroes]
console.log(all_New_heroes) // all enteries will appears as the element of the single array

// 11}  FLAT Operation 

const my_array = [ 1,2,3,[4,5,6] , 7, [6,7,[4,5]],8 ]
const result = my_array.flat(Infinity) // flat also returns a new array by making all elements as individual elements from the previous array
console.log(result)

// 12} isArray operation : is used for the Checking
const name = "tarun"
console.log(Array.isArray(name)) // give false as it is string and not an array

// 13} FROM operation : Converting an string in array

console.log(Array.from(name)) // "from" is used to convert a string to array

// Converting an object in array
console.log(Array.isArray({name: "Tarun"})) 
/* return false or [] because we are not mentioning that we wants array of key or the 
   value given to the key. */

// 14} OF operation : used to converting several variables into an array

let s1 = 45;
let s2 = 56;
let s3 = 82;

console.log(Array.of(s1,s2,s3))

