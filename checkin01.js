/**

    Instructions. Do these things now in class. Complete the steps for this answer:
    
    - Create an answer `branch`
    - Fill in the answer
    - Commit to your personal repository
    - Create a PR to the `SummerOfCode2020` repo

    Q: What is a pure function?
    A: A function that uses the data input in to produce an outcome without mutating the original data
 */

/**

    Instructions. Do this next. 
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: What is the primary thing that functional programming seeks to avoid?
    A: It seeks to perform math-like functions while avoiding changing/mutating data
 */


/**

    Instructions. Do this third. 
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: Given the code below, is the trimLeft() function pure?
    A: I don't think so, I think the .shift() will mutate the input string
    Correct Answer: This is pure because it's only mutating the array that is within the function it self.
    The output isn't actually altered.

    Q: is the trimLeft() function idempotent?
    A: I think so, I remember JR said it doesn't affect string/number params

 */



function trimLeft(str) {
    let arr = str.split('');
    let i = 0;
    console.log({ str, arr, i })
    while (arr[i] === ' ') {
        arr.shift();
        console.log({ arr })
        i++;
    }

    return arr.join('');
}

const sentence = " test this "
console.log(trimLeft(sentence))
