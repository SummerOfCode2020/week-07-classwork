/**

    This version of the sumAll() function is neither pure nor idempotent. 
    The reason for this is that it mutates the original array in the process of calculating its total. 
    This side effect makes it so that we can't keep calling sumAll() on the array and receive the 
    same number back.

    Learn something new!

     - Array 'pop' method - removes the last element from an array and returns that element.

     - See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop


    This function is "pure" but not "Idempotent"

    Idempotency involves arrays and objects.

    Idempotency does not impact string and number parameters

 */
function sumAll(ages) {
  let total = 0

  // Awesome question here: how is this a predicate?
  // 0 is false in a predicate; any number that is NOT 0 is true in a predicate
  // === and !== check for type and value
  // predicate can also be written as while(ages.length !== 0)
  //
  // 1: [1, 2, 3, 4, 5]
  // 2: [1, 2, 3, 4]
  // 3: [1, 2, 3]
  // 4: [1, 2]
  // 5: [1]
  // 6: [] // this is where the loop exits

  while (ages.length) {
    // `ages` array is being modified
    // total = total + ages.pop()
    total += ages.pop()
    console.log({ ages })
  }

  return total
}

// given this data
const dayCampers = [1, 2, 3, 4, 5]

// expect to see all of the data
console.log({ dayCampers })

// looping here for example purposes to show that the result is not the same the second and third call
// We see that this implementation has "side effects" so it is not an "Idempotent" function
// We have a function with an unexpected side effect (in this case, getting rid of items from array)
for (let i = 0; i < 3; i++) {
  console.log(sumAll(dayCampers))
}

// expect to see all of the data
console.log({ dayCampers })
