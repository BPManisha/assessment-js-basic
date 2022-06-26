

// trying to find middle numbers in any given array
//writing my pseudo code
1. first ind the lengthof the given Array.
////devide the array length by 2to find the middle indexnumber of the array..
//there will 2 scenarios
//first scenario the middle indexnumbercould be an odd number
//devide the lengthby 2to find the middle indexnumber of the array
//first scenario the middle indexnumbercould be an even number
// its getting complecated to code here but for now just to work with the array given which is arr = [1, 2, 3, 4, 5]..
using shift,pop and push method of the Array

///My code here
const arr = [1, 2, 3, 4, 5];

const removeFirstItem = arr.shift();
console.log(removeFirstItem);

const removeLastItem = arr.pop();
console.log(removeLastItem);

console.log(arr);// this should just show{2,3,4} on the console output.

//end of my code