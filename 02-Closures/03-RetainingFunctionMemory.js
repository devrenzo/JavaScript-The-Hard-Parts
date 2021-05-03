function outer() {
    let counter = 0;

    function incrementCounter() {
        counter++;
        console.log(counter);
    }

    return incrementCounter;
}

// Wen outer in running iun the first time is returning the CODE of incrementCounter() BUT also t
//the memory context where incrementCounter was defined [[scope]]

const myNewFunction = outer();
const mySecondFunction = outer();
myNewFunction();// counter = 1
mySecondFunction() // counter = 1
console.log(myNewFunction);
myNewFunction(); //counter = 2
console.log(myNewFunction);
