/**
 * Doubles each number in the given array, filters for values greater than 3, and returns the sum of those numbers.
 *
 * @param {number[]} numbers - The array of numbers to be processed.
 * @returns {number} - The sum of the numbers greater than 3.
 */
export function generateSum(numbers) {
  // code ...
}
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = generateSum(numbers);
console.log(doubledNumbers);

// Write the code to run the promises one after another
export const asyncSeriesExecuter = async function(promises) {
  // code ...
}

// Write the code to run the promises in parallel
export const asyncParallelExecuter = async function(promises) {
  // code ...
}

const asyncTask = function(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100*i)
}); }
const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];


// Find the unique values in the given array and return them in a sorted array.
const arr = [1,1,3,4,4,5,2,21,11,21,3,8,5,6,5,4];
export const getUniqueValues = function(arr) {
  // code ...
}


// Change the function so that it returns run(50)() should return 51
export const run = (a1) => {
  let b1 = a1;
  return // ... code
}

// Write a code to convert the settimeout into a promise
export const asyncFunction = async function() {
  // ...code
    setTimeout(() => 
      {
        // returns Hello
      }, 1000);
};


// Write a function that returns the name of the Object.
function printName() {
  return this.name;
};

// Is this working for you?
const printAge = () => {
  return this.age;
}

const John = {
  name: 'John',
  age: 23
};

const Carrie = {
  name: 'Carrie',
  age: 24
};

// Change something in the next lines
export const printJohnName = ''; // should print the name John
export const printCarrieName = ''; // should print the name Carrie
export const printJohnAge = ''; // should print the age 23
export const printCarrieAge = ''; // should print the age 24
