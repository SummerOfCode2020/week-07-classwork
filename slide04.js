/**

    This version of the sumAll() function is neither pure nor idempotent. The reason for this is that it mutates the original array in the process of calculating its total. This side effect makes it so that we can't keep calling sumAll() on the array and receive the same number back.

    Learn something new!

     - Array 'pop' method - removes the last element from an array and returns that element.

     - See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop


    This function is "pure" but not "Idempotent"

    Idempotency involves arrays and objects.

    Idempotency does not impact string and number parameters



 */
function sumAll(ages) {
  let total = 0
  // while (predicate), this statement is evaluating to a true or false status
  // if it's a value, then true, not a value then false.
  // 1: [1, 2, 3, 4, 5]
  // 2: [1, 2, 3, 4]
  // 3: [1, 2, 3]
  while (ages.length) {
    // `ages` array is being modified
    total += ages.pop()
    console.log(ages)
  }

  return total
}

// given this data
const dayCampers = [1, 2, 3, 4, 5]
// Expect to see all of the data
console.log({ dayCampers })

// looping here for example purposes to show that the result is not the same the second and third call
// We see that this implementation has "side effects" so it is not an "Idempotent" function
for (let i = 0; i < 3; i++) {
  console.log(sumAll(dayCampers))
}
// Expect to still see all of the data
console.log({ dayCampers })