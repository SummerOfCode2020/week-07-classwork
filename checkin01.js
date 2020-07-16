/**

    Instructions. Do these things now in class. Complete the steps for this answer:
    
    - Create an answer `branch`
    - Fill in the answer
    - Commit to your personal repository
    - Create a PR to the `SummerOfCode2020` repo

    Q: What is a pure function?
    A: a function that returns the same value no matter how many times we run through it.
        (as long as the input values are the same).
 */

/**

    Instructions. Do this next. 
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: What is the primary thing that functional programming seeks to avoid?
    A: Mutation
 */


/**

    Instructions. Do this third. 
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: Given the code below, is the trimLeft() function pure?
    A: yes

    Q: is the trimLeft() function idempotent?
    A: yes
 */

 

function trimLeft(str) {
    let arr = str.split('');
    let i = 0;
console.log({str, arr, i})
    while (arr[i] === ' ') {
        arr.shift();
        console.log({arr})
        i++;

        console.log(arr)

    
    }
    return arr.join('');
}

let sentence = " test this"
console.log(trimLeft(sentence))
console.log({sentence})
