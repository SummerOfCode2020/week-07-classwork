/**

    This version of the sumAll() function is neither pure nor idempotent. The reason for this is that it mutates the original 
    array in the process of calculating its total. This side effect makes it so that we can't keep calling sumAll() 
    on the array and receive the same number back.

    Learn something new!

     - Array 'pop' method - removes the last element from an array and returns that element.

     - See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop


    This function is "pure" but not "Idempotent"

    Idempotency involves arrays and objects.

    Idempotency does not impact string and number parameters



 */
function sumAll(ages) {
  let total = 0
  // initialize with a number to prevent errors
  // if length is 0 then it's false
  // any number that is not 0 is true in a predicate
  // ages.length !== 0 (strictly not equal)
  // === and !== also check for type
  while(ages.length) {
    
    // `ages` array is being modified
    total += ages.pop()
    //total = total + ages.pop()
  }

  return total
}

// given this data
const dayCampers = [1, 2, 3, 4, 5]

console.log({dayCampers})
// {} makes it an object
// expect to see this array [1, 2, 3, 4, 5]

// looping here for example purposes to show that the result is not the same the second and third call
// We see that this implementation has "side effects" so it is not an "Idempotent" function
for(let i = 0; i < 3; i++) {
  console.log(sumAll(dayCampers))
}
//expect an empty array
console.log({dayCampers})
