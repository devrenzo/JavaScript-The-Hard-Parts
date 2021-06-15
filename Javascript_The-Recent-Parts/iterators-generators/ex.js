var numbers = {

    *[Symbol.iterator]({
        min = 0,
        max = 100,
        step = 1
    } = {}) {

        for (let i = min; i <= max; i += step) {
            yield i;
        }
    }
};

// should print 0..100 by 1s
for (let num of numbers) {
    console.log(num);
}

// should print 6..30 by 4s
console.log(`My lucky numbers are: ${[...numbers[Symbol.iterator]({min:6,max:30,step:4})]}`);

// Hint:
//     [...numbers[Symbol.iterator]( ?? )]