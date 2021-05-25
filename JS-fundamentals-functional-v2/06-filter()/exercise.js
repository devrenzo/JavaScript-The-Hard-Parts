// Filter the video data by the people who were present on the night of the murder!

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

  filter(list, cb) {
    if (!list.length) return;

    let newArray = [];

    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      if (cb(element, i, list)) newArray.push(element);
    }

    return newArray;
  },
};

// test data
const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Mrs. White',
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Reverend Green',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Rusty',
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Professor Plum',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
];

// Test

const check = (suspect) => suspect.present;

const isPresent = _.filter(videoData, check);
console.log('isPresent:', isPresent);
