const printHello = () => console.log('Hello');

const bloqForOneSec= ()=> {/*black box with code for example a for loop*/}
// Event loop check after every
// a line of code if the call stack is empty to trigger the queue
const timerId = setTimeout(printHello,0)
const timer2= setTimeout(printHello,1000)

console.log('First');
