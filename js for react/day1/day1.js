// destructuring array and object
const arr1=[10,30,40,20,50]
const [a,b,c,d,e]=arr1
console.log(a,b,c,d,e)


// destructring object
const person={
    name:"ram",
    age:30,
    address:"ktm",
    city:"ktm",
    country: "npl",
    status:true
}
const{status, country, name, age}=person
console.log(status,name,age,country)


// defualt parameter(arrow function for multiply)
 const mult=(a=1,b=1)=>a*b
 let r1=mult(10,20)
 console.log(r1)
 let r2=mult(2)
 console.log(r2)

// arrow function for divide
const divide=(a=2,b=4)=>a/b
let res1=divide(50,100)
console.log(res1)
let res2=divide(2)
console.log(res2)


// spread operator(...) three dot is used to represent the spread operator and merge
const fruits = ["apple","mango","orange"]
const vegetables =["tamato","potato","carrot"]
// merging the arrya and spread operator
const mergedArray=[...fruits,...vegetables]  
console.log("merge array:", mergedArray)
const animals= ["lion","tiger","elephant",...vegetables]
console.log("merged aarray1",animals)

const fruitobj={
    name1:"apple",
    color1:"red",
    price1:10,
    quantity1:5
}
const vegobj={
    name:"tomato",
    color:"green",
    price:5,
    quantity:10
}
const mergedobj={...fruitobj,...vegobj}
console.log("merged object:",mergedobj)

// rest operator example(...)
const multadd =(a,b,c,d,e,f) =>a+b+c+d+e+f
let sum= multadd(10,20,30,40,50,60)
console.log("sum:",sum)

// exmaple of rest operator
const multAddusingRest=(...params)=> params.reduce((a,b)=>a+b)
const multAddusingRestRes =multAddusingRest(1,2,3,4,5,6) 
console.log(multAddusingRestRes)
