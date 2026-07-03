let obj={
    fullname:"john ",
    address:"ktm",
    phone:9812345678,
    age:40,
    gender:"male"
}
// converting key:value pairs to array of keys
let keys=Object.keys(obj)
console.log(`keys array:${keys}`)

// arrray of values
let values=Object.values(obj)
console.log(`values array:${values}`)

// array of key:values pair
let entries=Object.entries(obj)
console.log(entries)


// fro each element
entries.forEach(
    ([keys,value],index)=>
    {

     console.log("index:",index)
    console.log(`keys:${keys}`,`value:${value}`)
 }
)

let number=[10,43,13,53,23,44]
// filter example
 let filterredarray=number.filter(
    (ele,index )=>{
        console.log("ele",ele)
        console.log("index",index)
        return ele>20;
    }
)
console.log("fliter array",filterredarray)


// reduce example :Reduce acculmulated the all elemnet to one value
let sum=number.reduce(
    (accumulated,currentvalue)=>{
        return accumulated+currentvalue

    },0  
    // 0 is the initial value of accumulated
)
console.log(" total sum",sum)

// find element
let searchelement=number.find(
    (ele,index)=>{
        console.log("ele",ele)
        console.log("index",index)
        return ele%2==0
    }
)

let Mydata=[
    {day:32,price:44400,task:"sabji kinney",area:"ktm"},
    {day:1,price:2000,task:"bills",area:"ktm"},
    {day:5,price:1500,task:"fuel",area:"lalitpur"},
    {day:10,price:5000,task:"school fee",area:"ktm"},
    {day:15,price:0,task:"phone recharge",area:"bhaktapur"},
]


// using filter 
let filtertask =Mydata.filter(
    (ele,index)=>{
        return ele.day<10
    }
)
console.log("filter mydata",filtertask)

//  using find
let findtask=Mydata.find(
    (ele,index)=>{
        return task.day==0
    }
)
console.log("price isequal to 0",findtask)

//using reduce
let totalprice=Mydata.reduce(
    (accumulated,currentvalue)=>{
        return accumulated+currentvalue.price
    },0
)
console.log("total price",totalprice) 

