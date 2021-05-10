function userCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function () {
        newUser.score++;
    };
    return newUser;
}

const user1 = userCreator('Renzo', 5);
const user2 = userCreator('Pinta', 3);

user1.increment();
console.log('Hola Mundo')
console.log(user1, user2);