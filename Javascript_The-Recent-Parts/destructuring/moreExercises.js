// // Object Destructuring 1
// // What does the following code return/print?

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// // console.log(numPlanets); // ? 8
// // console.log(yearNeptuneDiscovered); // ? 1846

// Object Destructuring 2
// What does the following code return/print?

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };

// let {numPlanets, ...discoveryYears} = planetFacts;

// console.log(discoveryYears); // ?   {yearNeptuneDiscovered: 1846,yearMarsDiscovered: 1659}

// Object Destructuring 3

function getUserData({ firstName, favoriteColor = 'green' }) {
  //   console.log(`Your name is ${firstName} and you like ${favoriteColor}`)
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' });
// ? Your name is Alejandro and you like purple
getUserData({ firstName: 'Melissa' }); // ?
// ? Your name is Melissa and you like green

getUserData({}); // ?
// ? Your name is undefined and you like green

// Array Destructuring 1

let [first, second, third] = ['Maya', 'Marisa', 'Chi'];

// console.log(first); // ? Maya
// console.log(second); // ? Marisa
// console.log(third); // ? Chi

// Array Destructuring 2

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  'Raindrops on roses',
  'whiskers on kittens',
  'Bright copper kettles',
  'warm woolen mittens',
  'Brown paper packages tied up with strings',
];

// console.log(raindrops); // ? Raindrops on roses
// console.log(whiskers); // ? whiskers on kittens
// console.log(aFewOfMyFavoriteThings); // ?
// [ "Bright copper kettles",
// "warm woolen mittens",
// "Brown paper packages tied up with strings"]

// Array Destructuring 3

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

// console.log(numbers) // ?   [10,30,20]

var obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

/* Write an ES2015 Version */

const {
  numbers: { a, b },
} = obj;
// console.log('a:', a);
// console.log('b:', b);

const arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

/* Write an ES2015 Version */

[arr[1], arr[0]] = [arr[0], arr[1]];

// console.log(arr);

function raceResults([first, second, third, ...rest] = []) {
  return {
    first,
    second,
    third,
    rest,
  };
}

const res = raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']);

console.log('raceResults:', res)

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/
