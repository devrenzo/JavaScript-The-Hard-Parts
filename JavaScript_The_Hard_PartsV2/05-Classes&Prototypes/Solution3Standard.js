// The New Keyword
// The New keyword automate all the process of solution number 2
// . Create and return a object
// . Link the __proto__ chain to any function that we indicate
// the new object created is gonna receive the label of "this"

function UserCreator(name, score) {
    this.name = name;
    this.score = score;
}

// The Functions are object and functions , the have a  property called "prototype"
// that's a empty object , we can filled that object with functionality that's gonna be shared by all
// the objects that came from the "new" keyword

// Single saved version
UserCreator.prototype.increment = function () {
    this.score++;
};

UserCreator.prototype.login = function () {
    console.log('login');
};

// The "user1" __proto__ is linked with the prototype property of "UserCreator"
// in that way we only created once the function "login" and "increment"
const user1 = new UserCreator('Renzo', 5);
const user2 = new UserCreator('Pinta', 3);
user1.increment();

console.log(UserCreator);
console.log(user1);


console.log(user1.hasOwnProperty('score'));