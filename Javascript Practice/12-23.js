
// going over some fundametals because why not
const arr = [1,2,3];


// for(const value of arr){


// }


// arr.forEach(function(value, index, arr) {
//     console.log(value, index, this );


// }, {num : 10})  // {num :10} would be bound to this 

// const mappedArray = arr.map(function(value, index) { // mapped created a new array based on the returned values.

//     return   value + index

// }, {num : 10})
 
// console.log(mappedArray)

// const findValue = arr.find(function(value, index) { // find will return the FIRST VALUE that matches whatever  the condition is  
//     return value > this.num
// }, {num : 2});
// console.log(findValue);

// const foundIndex = arr.findIndex(function(value, index) { // find will return the FIRST VALUE that matches whatever  the condition is  
//     return value > this.num
// }, {num : 2});
// console.log(foundIndex);

// const allPass = arr.every(function(value, index) { //does EVERY element in the array fulfill the condition return true boolean of that value  
//     return value > this.num
// }, {num : 0});
// console.log(allPass);

