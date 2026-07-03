
// 1. Use map to double all numbers

const numbers1 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers1.map(num => num * 2);
console.log("1) Doubled Numbers:", doubledNumbers);


// 2. Use filter to get all even numbers

const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log("2) Even Numbers:", evenNumbers);


// 3. Use reduce to calculate the sum

const numbers3 = [10, 20, 30, 40];
const totalSum = numbers3.reduce((sum, num) => sum + num, 0);
console.log("3) Sum of Numbers:", totalSum);


// 4. Use find to get the first user with age > 18

const users = [
  { name: "Ram", age: 15 },
  { name: "Sita", age: 22 },
  { name: "Hari", age: 17 }
];

const firstAdultUser = users.find(user => user.age > 18);
console.log("4) First Adult User:", firstAdultUser);


// 5. Use forEach to log fruits with index

const fruits = ["apple", "banana", "orange"];

console.log("5) Fruits List:");
fruits.forEach((fruit, index) => {
  console.log(index + 1 + ". " + fruit);
});


// 6. Use map to extract only names from users

const userNames = users.map(user => user.name);
console.log("6) User Names:", userNames);


// 7. Use filter to get products with price < 100

const products = [
  { name: "Pen", price: 10 },
  { name: "Bag", price: 500 },
  { name: "Book", price: 80 }
];

const affordableProducts = products.filter(product => product.price < 100);
console.log("7) Affordable Products:", affordableProducts);


// 8. Use reduce to find the maximum value

const numbers4 = [5, 20, 10, 50, 30];
const maxValue = numbers4.reduce((max, num) => (num > max ? num : max));
console.log("8) Maximum Value:", maxValue);



// 9. Use map and filter to get names of adults in uppercase

const adultNamesUppercase = users
  .filter(user => user.age >= 18)
  .map(user => user.name.toUpperCase());

console.log("9) Adult Names in Uppercase:", adultNamesUppercase);



// 10. Use forEach to build an HTML unordered list
const items = ['Apple', 'Banana', 'Cherry'];

console.log("10) Unordered List:");
items.forEach(item => {
  console.log("• " + item);
});
