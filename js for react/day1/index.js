console.log("hello this is a javascript")
//variables :var,let,const
//var is global scope and functional scope
//let is block scope
//const is block scope
//exmaple of var

var a="hello"
console.log(a, typeof(a))
a=100
console.log(a,typeof(a))


//function scope exmaple with var
function test()
{
    var b ="welcome to js"
    console.log("b=",b)
}
test()
// not accessible outside of the fuction. i.e b is the functional scope of variable
// console.log("outside tets fucntion:",b)
// exmaple of let
if(true){
    let c="hello.this is me Let c"
    console.log("c=",c)
    c=90.100
    console.log(c,typeof(c))
}


// tetsing block scope 
//  console.log("outside if the block:",c)
// exmaple of const
const pi=3.14
console.log("pi:",pi)
// pi=3.1415
console.log("pi then:",pi)


// template literal  example
const display= "hello this is a template lietral "
console.log("message:",display)
console.log(` msg: ${display}`)
const count= 1000
console.log(`msg: ${display} & count=${count}`)
 
// arrow fucntion /anonymous fucntion example
// normal fucntion
 function print()
 {
    return "hello this is a normal function"
 }


// 1.single line arrow fucntion
const print1= () => "hello this a single line arrow function"
let res = print1()
console.log(res)


// single line arrow fucntion with paramater
const add = (x,y) => x+y
let addRes = add(10,20)
console.log(addRes)


// multi line arrow fucntion 
const print2 = () => {
    let z= true 
    return"hello this is a multi line arrow " +`z=${z}`
}
 let res2=print2()
 console.log(res2)




