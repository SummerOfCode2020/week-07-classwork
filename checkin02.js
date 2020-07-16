/**

    Instructions. Do these things now in class. Complete the steps for this answer:
    
    - Work on the answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: What is a predicate function?
    A: A function that returns true or false (boolean value)
 */

/**

    Instructions. Do this next. 
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: What is a higher order function?
    A: A function that passes another function through it, and can return another function
 */


/**

    Instructions. Do this third. There is a trick question in here related to variable data types.
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: Given the code below which takes a string parameter, is the trimLeft() function pure?
    A: Yes

    Q: is the trimLeft() function idempotent?
    A: Yes

 */

function trimLeft(str) {
    let arr = str.split('');
    let i = 0;
console.log({str, arr, i})
    while (arr[i] === ' ') {
        arr.shift();
        console.log({arr})
        i++;
    }

    return arr.join('');
}
let sentence = ' testing'
console.log(trimLeft(sentence))
console.log(sentence)
