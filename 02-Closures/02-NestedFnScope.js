/*
 *  Calling a function in the same function call as it was defined
 *
 * */

function outer() {
    let counter = 0;
    // This function is saved in the Execution Context of outer()
    // And in the same time is inside of outer()
    function incrementCounter() {
        counter++;
        console.log(counter);
    }

    incrementCounter();
}

outer();
console.log(outer);
