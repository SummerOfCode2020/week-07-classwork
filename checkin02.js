/**

    Instructions. Do these things now in class. Complete the steps for this answer:
    
    - Work on the answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: What is a predicate function?
    A: Boolean valued function
 */

/**

    Instructions. Do this next. 
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: What is a higher order function?
    A: function against a function
 */


/**

    Instructions. Do this third. There is a trick question in here related to variable data types.
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: Given the code below which takes a string parameter, is the trimLeft() function pure?
    A: yes

    Q: is the trimLeft() function idempotent?
    A:Yes

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
