// CHALLENGE 1 ✔
function createFunction() {
  return () => {
    console.log('Hello');
  };
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

// CHALLENGE 2 ✔
function createFunctionPrinter(input) {
  const text = input;

  return () => {
    console.log(text);
  };
}

// // /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');

// CHALLENGE 3 ✔
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter(); // => counter = 1
// willCounter(); // => counter = 2
// willCounter(); // => counter = 3

// jasCounter(); // => counter = 1
// willCounter(); // => counter = 4

function addByX(x) {
  return (input) => {
    let base = x;
    base += input;
    return base;
    console.log(base);
  };
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// CHALLENGE 4 ✔
function once(func) {
  let funcUsed = 0;
  let firstTime = 0;

  return (input) => {
    funcUsed++;
    if (funcUsed <= 1) {
      // Only executed once
      firstTime = func(input);
      return firstTime;
    }
    return firstTime;
  };
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4)); // => should log 6
// console.log(onceFunc(10)); // => should log 6
// console.log(onceFunc(9001)); // => should log 6

// CHALLENGE 5 ✔
function after(count, func) {
  let called = 0;

  return () => {
    called++;
    console.log('called:', called);
    if (called === count) {
      return func();
    }
  };
}

// /*** Uncomment these to check your work! ***/
// const called = function () {
//   console.log('hello');
// };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// CHALLENGE 6 ✔
function delay(func, wait, ...args) {
  setTimeout(() => func(...args), wait);
}

// CHALLENGE 7 ✔
function rollCall(names) {
  //   let arrayNames = names;
  let i = 0;
  return () => {
    if (names.length) {
      console.log(names.shift());
      return;
    }
    console.log('Everyone accounted for');
  };
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth']);
// rollCaller(); // => should log 'Victoria'
// rollCaller(); // => should log 'Juan'
// rollCaller(); // => should log 'Ruth'
// rollCaller(); // => should log 'Everyone accounted for'

// CHALLENGE 8 ✔
function saveOutput(func, magicWord) {
  const passwordSaved = magicWord;
  const result = {};
  return (input) => {
    if (input === passwordSaved) {
      console.log('result:', result);
      return result;
    }
    result[input] = func(input);
    console.log('func:', func(input));
  };
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) {
  return num * 2;
};
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9 ✔
function cycleIterator(array) {
  let saved = [...array];
  return () => {
    return (saved.length ? saved : array).shift();
  };
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10 ✔
function defineFirstArg(func, arg) {
  return (num) => func(arg, num);
}

// /*** Uncomment these to check your work! ***/
// const subtract = function (big, small) {
//   return big - small;
// };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11 ✔
function dateStamp(func) {
  return (...args) => {
    return {
      date: new Date(),
      output: func(args),
    };
  };
}

/*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12 ✔
function censor() {
  let toRemove = [];
  let toReplace = [];

  return (strReplace, remplacement) => {
    if (!remplacement) {
      for (let i = 0; i < toReplace.length; i++) {
        strReplace = strReplace.replace(toRemove[i], toReplace[i]);
      }
      return strReplace;
    }
    toReplace.push(remplacement);
    toRemove.push(strReplace);
  };
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13  ✔
function createSecretHolder(secret) {
  let num = secret;
  const obj = {
    getSecret() {
      return num;
    },
    setSecret(n) {
      num = n;
    },
  };
  return obj;
}

/*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5);
// console.log('obj:', obj);
// console.log(obj.getSecret()); // => returns 5
// obj.setSecret(2);
// console.log(obj.getSecret()); // => returns 2

// CHALLENGE 14 ✔
function callTimes() {
  let counter = 0;
  return () => {
    counter++;
    console.log('counter:', counter);
    return counter;
  };
}

/*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2

// CHALLENGE 15 ✔
function russianRoulette(num) {
  let numBullets = num;

  return () => {
    numBullets--;
    let msg = '';

    if (numBullets > 0) {
      msg = console.log('Click');
    }
    if (numBullets === 0) {
      msg = console.log('Bang');
    }
    if (numBullets <= 0) {
      msg = console.log('reload to play again');
    }

    return msg;
  };
}

// /*** Uncomment these to check your work! ***/
// const play = russianRoulette(3);
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'bang'
// console.log(play()); // => should log 'reload to play again'
// console.log(play()); // => should log 'reload to play again'

// CHALLENGE 16 ✔
function average() {
  let nums = [];
  let average = 0;
  return (add) => {
    if (!add) {
      return average;
    }
    nums.push(add);
    average = nums.reduce((acc, val) => acc + val) / nums.length;
    return average;
  };
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8

// CHALLENGE 17 ✔
function makeFuncTester(arrOfTests) {
  return (cb) => arrOfTests.every((par) => cb(par[0]) === par[1]);
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = (str) => str.toUpperCase();
// const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18 ✔
function makeHistory(limit) {
  let history = [];

  return (str) => {
    if (history.length > limit) history.shift();
    if (str === 'undo') {
      return (
        (!history.length && `nothing to undo`) || `${history.pop()} undone`
      );
    }
    history.push(str);
    return `${str} done`;
  };
}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {
  let currCard = 0;

  let first, second;

  const player = function () {
    if (currCard === 'bust') return 'you are done!';
    currCard += currCard < first + second ? first + second : array.shift();
    if (currCard > 21) {
      currCard = 'bust';
    }
    return currCard;
  };

  return function (rnd1, rnd2) {
    // Reset Card For every new Player
    currCard = 0;
    first = rnd1;
    second = rnd2;
    return player;
  };
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([
  2,
  6,
  1,
  7,
  11,
  4,
  6,
  3,
  9,
  8,
  9,
  3,
  10,
  4,
  5,
  3,
  7,
  4,
  9,
  6,
  10,
  11,
]);

/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

/*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
