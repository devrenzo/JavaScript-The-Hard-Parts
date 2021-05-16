function CreateSuspectObjects(name, i, list) {
  return {
    name: name,
    username: name.split(' ')[1] + i,
    color: name.split(' ')[1],
    speak() {
      console.log(`my name is ${name}`);
    },
  };
}

let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

// Make a .forEach() from scratch

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
};
// Test with array
const newList = _.each(suspects, CreateSuspectObjects);
console.log('list:', suspects);
console.log('newList:', newList);

// Test with object

suspects = [
  { name: 'Miss Scarlet' },
  { name: 'Colonel Mustard' },
  { name: 'Mr. White' },
];

_.each(suspects, CreateSuspectObjects);
console.log('suspects:', suspects);
