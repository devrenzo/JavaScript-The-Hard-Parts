function printHello() {
  console.log('Hello');
}

function display(data) {
  console.log(data.text());
}
function blockFor300ms() {
  const array = [];
  for (let i = 0; i < 100000000; i++) {
    array[i] = 'HOLA';
  }
  console.log('End Block');
}

setTimeout(printHello, 0);

const futureData = fetch(
  'https://cors-anywhere.herokuapp.com/https://twitter.com/will/tweets/1'
);

futureData.then(display);

blockFor300ms();

console.log('Me First');
