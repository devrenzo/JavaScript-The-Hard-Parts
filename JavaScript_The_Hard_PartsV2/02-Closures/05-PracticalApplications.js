const saveNums = () => {
  let nums = [];

  const checkNums = (number) => {
    if (!nums.includes(number)) {
      nums.push(number);
      console.log(`The Array does not includes ${number}`);
      return nums;
    }
    console.log(`The Array includes ${number}`);
    return nums;
  };

  return checkNums;
};

const addNum = saveNums();

const checkSeven = addNum(7);
console.log('checkSeven:', checkSeven);

const addEight = addNum(8);
const hasEight = addNum(9);
const hasNine = addNum(9);
console.log('hasNine:', hasNine)
console.log('hasEight:', hasEight);
