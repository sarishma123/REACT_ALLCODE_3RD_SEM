
// 1. Multiply Two Numbers
const multiply = (a, b) => a * b
mul=multiply(5, 4);
console.log("1. Multiply of the mubers is:", mul);

// 2. Get Full Name
const FullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log("2. Full Name:", FullName("Dipak", "Shrestha"));


// 3. Check if Even
const isEven = (num) => num % 2 === 0;
console.log("3. Is 10 Even?", isEven(10));

// 4. Capitalize First Letter
const capitalize = (str) => (str ? str.charAt(0).toUpperCase() + str.slice(1) : "");
console.log("4. Capitalize 'hello':", capitalize("hello"));

// 5. Calculate Circle Area (π ≈ 3.14)
const calculateArea = (radius) => 3.14 * (radius ** 2);
console.log("5. Area of circle (radius 5):", calculateArea(5));

// 6. Get Initials
const getInitials = (firstName, lastName) => 
  `${firstName.charAt(0).toUpperCase()}.${lastName.charAt(0).toUpperCase()}.`;
 console.log("6. Initials:", getInitials("Dipak", "Shrestha"));

// 7. Fahrenheit to Celsius
const fahrenheitToCelsius = (f) => ((f - 32) * 5) / 9;
console.log("7. 98.6°F to Celsius:", fahrenheitToCelsius(98.6).toFixed(2));

// 8. Reverse String
const reverseString = (str) => str.split("").reverse().join("");
console.log("8. Reverse 'NodeJS':", reverseString("NodeJS"));

// 9. Find Maximum in Array
const findMax = (arr) => Math.max(...arr);
console.log("9. Max in [10, 50, 30]:", findMax([10, 50, 30]));

// 10. Format Date (DD/MM/YYYY)
const formatDate = (date) => {
  const d = String(date.getDate()).padStart(2, "0");
  // getMonth() returns 0-11, so we add 1 for human-readable format
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
};

console.log("10. Formatted Date:", formatDate(new Date("2024-06-15")));
