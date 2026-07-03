// Task1- Variables and Template literals
const firstName = "sarishma"
const lastName = "ghimire"
console.log(`Greetings! Mr. ${firstName} ${lastName}`)


// Task2- let and cost scope
{
    let name = "sarishma"
}
// console.log(name)  // Error: name is not defined (block-scoped)


{
    const lastname1= "ghimire"
}
// console.log(lastname1)  // Error: lastname1 is not defined (block-scoped)
// output: error->name is not defined


// Task3-Arrow function simple
const greet =()=>{
    let name= "Sarishma"
    return "Hello,"+`${name}!`
}
let result = greet()
console.log(result)


// Task4-Arrow function with multiple parameters
const multiply = (a,b)=>a*b
let res= multiply(5,6)
console.log("Multiplication: ", res)


// Task5-Object Destructuring
const person ={
    name: "Sarishma",
    age: 19,
    country: "Nepal"
}
const {name, country} = person
console.log("Name: ", name)
console.log("Country: ", country)


// Task6-Array destructuring
const MultipleOfTen = [10, 20, 30, 40]
const [twenty, thirty] = MultipleOfTen 
console.log(twenty)
console.log(thirty)


// Task7-Default Parameters
const sayHello = (name= "Guest") =>{
    return `Hello, ${name}!!`
}
console.log(sayHello())
console.log(sayHello("sarishma"))



// Task8-Rest Operators(Sum of numbers)
const sumAll= (...numbers)=>{
    return numbers.reduce((total,n)=>total+n, 0)
}
console.log(sumAll(1,2,3,4))


// Task9-Spread Operator with arrays
const array1 = [1, 2, 3]
const array2 = [4, 5]
const merge = [...array1, ...array2]
console.log("Merged values: ",merge)


// Task10-Merge and Destructure Object
const var1 = {a: 1, b: 2}
const var2 = {c: 3, d: 4}

const merged = {...var1,...var2}
const {a, d} = merged
console.log("A:",a)
console.log("D:",d)