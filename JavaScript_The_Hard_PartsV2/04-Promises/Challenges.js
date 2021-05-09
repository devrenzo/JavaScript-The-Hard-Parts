// Challenge 1 ✔

function sayHello() {
    setTimeout(() => {
        console.log('Hello');
    }, 1000);
}

// Uncomment the line below when ready
// sayHello(); // should log "Hello" after 1000ms


// Challenge 2 ✔
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Resolved');
    }, 1000);
});

// promise.then(console.log);

// Should print out "Resolved!"
// ADD CODE HERE


// Challenge 3 ✔

promise = new Promise(function (resolve, reject) {
    // ADD CODE HERE
    reject('Rejected 👎');
});

// Should print out "Reject!"
// promise.catch(console.warn);
// ADD CODE HERE


// Challenge 4

promise = new Promise(function (resolve, reject) {
    // ADD CODE HERE
    resolve('Promise han been resolved!');
});

// Uncomment the lines below when ready
// promise.then(() => console.log('Promise has been resolved!')); // Second
// console.log("I'm not the promise!"); // First


// Challenge 5
function delay() {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    }));
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
// delay().then(sayHello);


// Challenge 6
//
// ADD CODE BELOW
let secondPromise = new Promise(((resolve, reject) => {
    resolve('Second');
}));
let firstPromise = new Promise(((resolve, reject) => {
    resolve(secondPromise);
}));

// firstPromise.then().then(console.log)

// Challenge 7
const fakePeople = [
    {name: 'Rudolph', hasPets: false, currentTemp: 98.6},
    {name: 'Zebulon', hasPets: true, currentTemp: 22.6},
    {name: 'Harold', hasPets: true, currentTemp: 98.3},
];

const fakeAPICall = (i) => {
    const returnTime = Math.floor(Math.random() * 1000);
    return new Promise((resolve, reject) => {
        if (i >= 0 && i < fakePeople.length) {
            setTimeout(() => resolve(fakePeople[i]), returnTime);
        } else {
            reject({message: "index out of range"});
        }
    });
};

function getAllData() {
    const arrayPromises = fakePeople.map((people, idx) => fakeAPICall(idx));
    return Promise.all(arrayPromises);
}

getAllData().then(console.log);