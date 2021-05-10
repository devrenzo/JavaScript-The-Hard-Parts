function userCreator(name, score) {

    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;

    return newUser;
}

const userFunctionStore = {
    increment: function () {
        // function add1() {
        //     // This is referring to the global Memory
        //     //This approach dont work
        //     this.score++;
        // }
        //
        // // First Solution Is using add1.call(this)
        // // add1();
        // //this is gonna be evaluated to user1
        // add1.call(this);

        // Second Solution using arrow function
        // "this" is lexical scope is determinate by where the function is saved

        const add1 = () => this.score++;
        add1()
    },

};


const user1 = userCreator('Renzo', 5);
const user2 = userCreator('Pinta', 3);
user1.increment();
console.log(user1, user2);


console.log(user1.hasOwnProperty('score'));