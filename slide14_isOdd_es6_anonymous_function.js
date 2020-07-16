/**

    A common pattern you will see with higher order functions is defining an anonymous function and passing it in at the same time. 
    
    As we see here we can take the body of the isOdd() function and simply drop it into our filter() call. 
    
    This will cause JavaScript to first define the function and then pass it into filter() to be used as the predicate.
    
    Because we are defining it in this context it will not be available to be called by any other code, it will only exist for this instance of filter(). 
     
    Since it can't be called anywhere else, it doesn't need a name, so we can use an anonymous function here. When using this pattern you will almost always see the ES6 fat arrow syntax used. We've seen this pattern in our tests already.

 */


// A "higher order" function - a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.
// We now see it can also be an anonymous function as well
// The function that we pass as an argument to another function, is called a Callback function.

const arr = [1, 2, 3, 4, 5]

const retVal = arr.filter(function (n) {
  console.log({n})
  return n % 2 === 1
})

console.log({retVal})
console.log({arr})
