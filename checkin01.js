/**

    Instructions. Do these things now in class. Complete the steps for this answer:
    
    - Create an answer `branch`
    - Fill in the answer
    - Commit to your personal repository
    - Create a PR to the `SummerOfCode2020` repo

    Q: What is a pure function?
    A: doesn't change parameters
 */

/**

    Instructions. Do this next. 
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: What is the primary thing that functional programming seeks to avoid?
    A: to limit impure code and keep it separate from everything else
 */


/**

    Instructions. Do this third. 
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: Given the code below, is the trimLeft() function pure?
    A: yes because it doesn't alter the original str variable

    Q: is the trimLeft() function idempotent?
    yes
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
