const brokenWeapon = (weapon) => `${weapon} broken.`;
let weapons = ['Candlestick', 'lead pipe', 'revolver'];

// In this exercise, students take a list of weapons and make them "broken" by mapping over them.

const _ = {
  each(list, cb) {
    // have to work with array and objects
    if (!list.length) return;

    for (let i = 0; i < list.length; i++) {
      if (typeof list[i] === 'object') {
        list[i] = cb(...Object.values(list[i]), i, list);
        continue;
      }
      list[i] = cb(list[i], i, list);
    }
  },
  map(list, cb = console.log) {
    if (!list.length) return;

    let newArray = [];

    for (let i = 0; i < list.length; i++) {
      if (typeof list[i] === 'object') {
        newArray.push(cb(...Object.values(list[i]), i, list));
        continue;
      }

      newArray.push(cb(list[i], i, list));
    }
    return newArray;
  },
};
// Test with array
let list = [];
const newList = _.map(weapons, brokenWeapon);
console.log('newList:', newList);

// Test with object

weapons = [
  { weapon: 'candlestick' },
  { weapon: 'm416' },
  { weapon: 'bazooka' },
];
const withObj = _.map(weapons, brokenWeapon);
console.log('withObj:', withObj);
