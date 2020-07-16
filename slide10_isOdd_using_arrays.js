/*

    To create our own filter function we will make one that we can pass in an array and a function to. 
    We will then loop over that array, calling the function on each item. 
    If the function returns true we will place the item in our new array. 
    Once done we will return the new array. 
    Here we see that ourFilter() does what we would expect. 
    The new array has only the odd numbers and the original array is unaltered.

*/


function isOdd(n) {
  return n % 2 === 1
}

// Learn something new!
// A "higher order" function - a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.
// The function that we pass as an argument to another function, is called a Callback function.
// https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
function ourFilter(arr, func) {
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i])
    }
  }

  return newArr
}

const arr = [1, 2, 3, 4, 5]
const retVal = ourFilter(arr, isOdd)

console.log({ retVal })
console.log({ arr })

