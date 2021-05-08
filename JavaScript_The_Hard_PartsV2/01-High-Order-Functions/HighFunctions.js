function copyArrayAndManipulate(array, instructions) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }

  return output;
}

const multiplyBy2 = (input) => input * 2;

// We are pasing functionality in the params

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
console.log('result:', result);
