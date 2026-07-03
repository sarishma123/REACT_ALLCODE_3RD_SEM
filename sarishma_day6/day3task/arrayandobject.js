let noofcolor=[0,1,2,3,4]
let arrofcolor=["red","yellow","orange","beige","khaki"]
console.log(arrofcolor[2])

// task2 create a object
let book={
    title: "harry potter",
    author:"jk rowling",
    Pages: "400",
    publishedyear: "2012"
};
console.log(book.title),
console.log(book.author),
console.log(book.Pages),
console.log(book.publishedyear)

// 3.add a new property isread :true to an existing object immutably (return object)

let updateBook={...book,isread:true}
console.log(updateBook)

// task4
let student=[
    {name:"ram",grade:4},
    {name:"shyam",grade:3},
    {name:"sita",grade:5},
]
console.log(student)

// task5
 let Company={
    name : "code himalyan",
    location : "thapathali",
    numberofemp : 50,
}
 console.log(Company)


//  task6
let arr1=[10,20,30]
const newarray=arr1.map(num=>num+5)
console.log(newarray)

// task7
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

// adding new property immutably
let updatedCar = {
  ...car,
  color: "red"
};

console.log(car);
console.log(updatedCar);


// 8️ Add a new item at the beginning of shoppingList immutably
let shoppingList = ["milk", "bread", "eggs"];
let updatedShoppingList = ["butter", ...shoppingList];


// 9️  Create an object profile with nested address
let profile = {
  name: "Sarishma",
  address: {
    city: "Kathmandu",
    country: "Nepal"
  }
};


//  10. Extract only name and price from products array
const products = [
  { name: "Laptop", price: 800, category: "Electronics" },
  { name: "Phone", price: 500, category: "Electronics" },
  { name: "Shoes", price: 100, category: "Fashion" }
];

let simplifiedProducts = products.map(({ name, price }) => ({ name, price }));

console.log(simplifiedProducts);
