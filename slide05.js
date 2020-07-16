/**

    Note that this version of the function does not mutate the original array.
    
    The array is used. The function calculates the total value using the array. 

    The array is not altered.
    
    Because it is completely self-contained in this way, we can call sumAll() on the array 
    over and over again and always receive the same answer.
    - Doesn't do anything unexpected

    This function is "pure" and "Idempotent"

 */
function sumAll(ages) {
  let total = 0

  for (let i = 0; i < ages.length; i++) {
    total += ages[i]
    // expect tis is unchanged in each loop
    console.log({ ages, total })
  }

  return total
}

// given this data
const dayCampers = [1, 2, 3, 4, 5]

// looping here for example purposes to show that the result is the same the second and third call
// this is because the function uses the array value passed in
//  **but** this implementation does not modify the value passed in
// The "Win": This version of the `sumAll` function has achieved pure state and avoided "side effects"
for (let i = 0; i < 3; i++) {
  console.log(sumAll(dayCampers))
}


/**

    Takeaways:

    - We should be conscious about our functions and what they do

    - Good practice is "pure" and "Idempotent"
    -- "pure" means only the parameter values were referenced and variables outside of the parameters such as global variables are not used
    -- "Idempotent" means that the function does not use code that modifies array and object parameters

    - If there is a "mutation" aka a change to a parameter value, there is not "Idempotence"

 */

