/**

    Now let's remove ourFilter() from the process and use JavaScript's built-in filter(). 
    The results are exactly the same with less code.

 */
function isOdd(n) {
  return n % 2 === 1
}

const arr = [1, 2, 3, 4, 5]
const retVal = arr.filter(isOdd)

console.log({arr})
console.log({retVal})

/*
slide12 - We also see that calling filter() on an array with only even numbers will return an empty list as we expected.

const arr = [2, 4, 6, 8]
const retVal = arr.filter(isOdd)

console.log(retVal)
console.log(arr)
*/