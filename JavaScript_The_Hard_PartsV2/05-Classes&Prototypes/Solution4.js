// The Class Keyword
// allow us to write the functionality together with the constructor


// SOLUTION WITH FUNCTION KEYWORD
// function UserCreator(name, score) {
//     this.name = name;
//     this.score = score;
// }
// UserCreator.prototype.increment = function () {
//     this.score++;
// };
//
// UserCreator.prototype.login = function () {
//     console.log('login');
// };


// SOLUTION WITH CLASS KEYWORD

class UserCreator {
    // function
    constructor(name,score) {
        this.name = name
        this.score = score
    }

    // _proto__ of the function above
    increment() {
        this.score ++
    }
    login() {
        console.log('Login');
    }
}


const user1 = new UserCreator('Renzo', 5);
const user2 = new UserCreator('Pinta', 3);
user1.increment();

console.log(UserCreator);
console.log(user1);


console.log(user1.hasOwnProperty('score'));