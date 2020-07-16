/**

    Instructions. Do these things now in class. Complete the steps for this answer:
    
    - Work on the answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: What is a predicate function?
    A: A predicate function is one that takes arguments and return either true of false 
 */

/**

    Instructions. Do this next. 
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: What is a higher order function?
    A: A higher order function is a function that takes a function as a parameter.
 */


/**

    Instructions. Do this third. There is a trick question in here related to variable data types.
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: Given the code below which takes a string parameter, is the trimLeft() function pure?
    A: I think the trimLeft() is a pure function because it returns a value based only on its inputs

    Q: is the trimLeft() function idempotent?
    A: I think trimLeft() is NOT a idempotent function because the value returned is does not show any mutation. 

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

console.log(trimLeft('testings'))
