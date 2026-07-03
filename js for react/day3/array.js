let arr=[23,54,56,78];
let stone=["Painite","alexandrite","carbonsteel"];
console.log(arr);
console.log(stone);
let ratio = [1.3,1.99,1.8]
let mergedArray = [...arr,...stone]
console.log(" merged array:",mergedArray)
for(let i=0;i<mergedArray.length;i++){
    console.log(`index of ${i} is ${mergedArray[i]}`)

}


// for each example
mergedArray.forEach(
    (element,index)=>{
        console.log("element",element)
        console.log("index:",index)
    }
)

// map example

const age =[34,45,23,12,34]
const modifiedAges =age.map(
    (element,index) => element*10
    )
    console.log(`modified age:${modifiedAges}`)