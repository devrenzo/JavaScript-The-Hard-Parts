function userCreator(name, score) {
    // When we pass a object to the Object.create the object  still empty but has a link with the
    // function that has benn passed
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;

    return newUser;
}

// Single Saved version of the func that newUser is gonna be using
// in that way we dont create the same function for each user that is created
const userFunctionStore = {
    increment() {
        // "this"  is a implicit parameter an always refer to the
        // left side of the dot when is called
        this.score++;
    },
    login() {
        console.log(`${this.name} Welcome 👋`);
    }
};


const user1 = userCreator('Renzo', 5);
const user2 = userCreator('Pinta', 3);
// "user1" is "this"
user1.increment();
user2.login();
console.log('Hola Mundo');
console.log(user1, user2);

// object.hasOwnProperty is derived from Object.prototype

console.log(user1.hasOwnProperty('score'));