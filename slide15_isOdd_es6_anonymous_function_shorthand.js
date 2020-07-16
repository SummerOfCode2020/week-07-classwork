/**

    Advanced topic. Option shorthand and not ideal to use until previously discussed implementations can be well understood and used.Not planned to be discussed Wed night in full detail to have more focus on syntax discussed until this point.

    Going a step further down the ES6 fat arrow line of thinking, since our function consists only of a return call, we can utilize the implicit return capabilities of fat arrow functions. This makes the code smaller and a little cleaner.


 */
function ourFilter(arr, func) {
 let newArr = []

  for (let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      newArr.push(arr[i)
    }
  }

  return newArr
}

const arr = [1, 2, 3, 4, 5]
const retVal = arr.filter((n) => n % 2 === 1)

console.log({retVal})
console.log({arr})

