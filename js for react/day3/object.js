// object (key value pair) example
const person={
    name:"krititka",
    age: 29,
    ismarried: true

}
// extracting vlaue from object
// 1.bracket notation
let name = person["name"]
console.log(`name:${name}`)

// 2.dor notation

let n1= person.name
console.log(`name1:${n1}`)

// adding new property
person.gender= "female"
console.log(person)

person.age=29
console.log(person)

// deleting peroperty or key:value
delete person.ismarried
console.log(person)


// merging mutliple object
let obj1={
    name:"john",
    age: 30
}
let obj2={
    ismarried:true,
    gender:"male"
}

let obj3={...obj1,...obj2}
console.log(obj3)

let obj4 ={
    addresss:"ktm",
    ...obj2

}
console.log(obj4)

// converting object array
// key:value pair or entry array
let  entries = Object.entries(obj4)
console.log(`entries:${entries}`)

// key array
let keys =Object.keys(obj4)
console.log(`key:${keys}`)

// values array
let value= Object.values(obj4)
console.log(`values:${value}`)

entries.forEach((element,index) => {
    console.log(`entries:${element},index:${index}`)
    
});

value.forEach(
    (ele,i)=>{
        console.log(`element:${ele},index:${i}`)
    }
)

// [kathmandu,tru,male in upper case]
let uppercasevalue = value.map(
    (element,index)=>{
        return element.toString().toUpperCase()
    }
)
console.log(`uppercase value:${uppercasevalue}`)