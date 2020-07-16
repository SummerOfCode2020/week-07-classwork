/**

    Instructions. Do these things now in class. Complete the steps for this answer:
    
    - Work on the answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: What is a predicate function?
    A: Function that returns only true or false
 */

/**

    Instructions. Do this next. 
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: What is a higher order function?
    A: function that takes another function as a parameter
 */


/**

    Instructions. Do this third. There is a trick question in here related to variable data types.
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: Given the code below which takes a string parameter, is the trimLeft() function pure?
    A: Yes, by using split you never alter input

    Q: is the trimLeft() function idempotent?
    A: yes works no matter how many times it's run

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
