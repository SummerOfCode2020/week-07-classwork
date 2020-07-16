/**

    Now let's remove ourFilter() from the process and use JavaScript's built-in filter(). 
    The results are exactly the same with less code.

    The filter takes a predicate function (return true or false) in order to work
    If the item returns true - filter will keep item; if the item returns false - filter removes item

 */
function isOdd(n) {
  return n % 2 === 1
}

// no longer needed: removed ourFilter function

const arr = [1, 2, 3, 4, 5]
const retVal = arr.filter(isOdd)

console.log({ retVal })
console.log({ arr })


/* slide12 - We also see that calling filter() on an array with only even numbers will return an
empty list as we expected.
*/

const arr2 = [2, 4, 6, 8]
const retVal2 = arr2.filter(isOdd)
console.log("Expect an empty array result")
console.log({ retVal2 })
console.log({ arr2 })
