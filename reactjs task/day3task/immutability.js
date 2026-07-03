// 1. Update an object's age from 25 to 26 immutably
let person = { name: "sarishma", age: 19 };
let  updatedPerson = { ...person, age: 20 };console.log("Original person:", person);
console.log("Updated person:", updatedPerson);

// 2. Add a new hobby to a person's hobbies array immutably
let personWithHobbies = { name: "ram", hobbies: ["reading", "novel writting"] };
let updatedHobbiesPerson = {
  ...personWithHobbies,
  hobbies: [...personWithHobbies.hobbies, "coding"]
};
console.log("Original hobbies:", personWithHobbies.hobbies);
console.log("Updated hobbies:", updatedHobbiesPerson.hobbies);

// 3. Remove the last element from an array immutably
let  numbers = [1, 2, 3, 4];
let withoutLast = numbers.slice(0, -1);
console.log("Original numbers:", numbers);
console.log("Without last:", withoutLast);

// 4. Replace the second element in an array immutably
let arr = [10, 20, 30];
let  replacedSecond = arr.map((item, index) =>
  index === 1 ? 99 : item
);
console.log("Original arr:", arr);
console.log("Replaced second:", replacedSecond);

// 5. Change nested property address.city immutably
let user = {
  name: "sachin",
  address: {
    city: "ktm city",
    addressLine: "pepsicola"
  }
};

let  updatedUser = {
  ...user,
  address: {
    ...user.address,
    city: "bkt"
  }
};
console.log("Original user:", user);
console.log("Updated user:", updatedUser);

// 6. Add a new key-value pair to an object immutably
let  obj = { a: 1, b: 2 };
let  objWithNewKey = { ...obj, c: 3 };
console.log("Original obj:", obj);
console.log("Obj with new key:", objWithNewKey);

// 7. Remove property deletedAt immutably
let record = { id: 1, name: "Item", deletedAt: "2024-01-01" };
let { deletedAt, ...cleanRecord } = record;
console.log("Original record:", record);
console.log("Clean record:", cleanRecord);

// 8. Merge two arrays immutably
let  arr1 = [1, 2];
let  arr2 = [3, 4];
let  mergedArray = [...arr1, ...arr2];
console.log("Arr1:", arr1);
console.log("Arr2:", arr2);
console.log("Merged array:", mergedArray);

// 9. Merge two objects immutably
let obj1 = { x: 1 };
let obj2 = { y: 2 };
let  mergedObject = { ...obj1, ...obj2 };
console.log("Obj1:", obj1);
console.log("Obj2:", obj2);
console.log("Merged object:", mergedObject);

// 10. Update object in array of objects immutably (by id)
let  users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

let updatedUsers = users.map(user =>
  user.id === 2 ? { ...user, name: "Updated B" } : user
);
console.log("Original users:", users);
console.log("Updated users:", updatedUsers);
