function display(data) {
  console.log(data.text());
}

/**
 * fecth is a function with two path one go to the web browser features
 * and in the other return a special object called 'Promise' , in that way we can keep a track of when the data is gona be fullfilled
 */

const futureData = fetch(
  'https://cors-anywhere.herokuapp.com/https://twitter.com/will/tweets/1'
);

/*
The promise object has a especial hidden attribute array that we can pass functions that gonna be called when the promise is fulfilled.
The parameter that is gonna be passed automatically is the 'data' in this case to the function
*/

futureData.then(display);

console.log('Me First');
