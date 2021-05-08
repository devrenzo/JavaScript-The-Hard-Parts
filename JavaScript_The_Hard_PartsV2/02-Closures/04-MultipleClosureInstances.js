function outer() {
  let counter = 0;

  function incrementCounter() {
    counter++;
    console.log(counter);
  }

  return incrementCounter;
}

const myNewFunction = outer();

myNewFunction(); // counter = 1
myNewFunction(); // counter = 2

// The Scope 'Backpack' is diferent is each instace of outer()

const anotherFunction = outer();

anotherFunction(); //counter = 1
anotherFunction(); // counter = 1
