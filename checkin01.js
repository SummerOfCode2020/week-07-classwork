/**

    Instructions. Do these things now in class. Complete the steps for this answer:
    
    - Create an answer `branch`
    - Fill in the answer
    - Commit to your personal repository
    - Create a PR to the `SummerOfCode2020` repo

    Q: What is a pure function?
    A: A function with no side-effects, output is impacted only by inputs
 */

/**

    Instructions. Do this next. 
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: What is the primary thing that functional programming seeks to avoid?
    A: Side-effects, unintended outputs or mutations in code
 */


/**

    Instructions. Do this third. 
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: Given the code below, is the trimLeft() function pure?
    A: Yes, I don't think input str is ever being mutated. Split turns it into array without changing input.

    Q: is the trimLeft() function idempotent?
    A: Yes, no matter how many times you call function str is always reset to its original input value
 */

 

function trimLeft(str) {
    let arr = str.split('');
    let i = 0;

    while (arr[i] === ' ') {
        arr.shift();
        i++;
    }

    return arr.join('');
}
for (i = 0; i < 3; i++) {
console.log(trimLeft("I am me"))}