// Conficdential Card includes = (Murderer , room , weapon)
// Characters
// Weapons
// rooms

const gameClue = {};

// use an Array is usefull when we want a ordered colection of the same data

gameClue['characters'] = ['Heinserber', 'Dimitrescu', 'Lady Miranda'];

gameClue.weapons = [];

gameClue.weapons.push('Dish Soap');
gameClue.weapons = gameClue.weapons.map((weapon) => ({
  type: weapon,
  location: 'Bathroom',
}));

console.log(gameClue);

// Recap

// Whats the diference between dot and bracket notation ?
// "Dot" notation coerce automatically to string , cant be used with unusual characters
//  Bracket notation can be used with all types (variables , string , math operations)
// [2+2] , ["weapons"]

// How to add a property with a key that contains special characters ?
// we use ["$dollar"] brackets with quotes

// How to add a property whose key and value are stored in diferent variables ?

const thisKey = 'Reloj';
const thisValue = 24;
const object = {};

object[thisKey] = thisValue;
// console.log('object:', object);

// How do we loop through objects to acces the values in

for (const key in gameClue) {
  console.log('value :', gameClue[key]);
}
