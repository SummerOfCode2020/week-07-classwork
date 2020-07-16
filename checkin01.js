/**

    Instructions. Do these things now in class. Complete the steps for this answer:
    
    - Create an answer `branch`
    - Fill in the answer
    - Commit to your personal repository
    - Create a PR to the `SummerOfCode2020` repo

    Q: What is a pure function?
    A: it's a function where the return value the only one that will change, determined by the input values,  without any other side effects
 */

/**

    Instructions. Do this next. 
    
    - Remain on your answer `branch`
    - Fill in the answer
    - Commit to your personal repository which can be expected to automatically reflect in your PR

    Q: What is the primary thing that functional programming seeks to avoid?
    A: functional programming seeks to avoid side effect,
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
    //mutate the array but not str
    let i = 0;
    console.log({str, arr, i})
    
    while (arr[i] === ' ') {
        arr.shift();
        console.log({arr})
        i++;
    }

    return arr.join('');
}

let sentence = " test this  "
console.log(trimLeft( sentence))
console.log({sentence})

//sentence is unchanged
