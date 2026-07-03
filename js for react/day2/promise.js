console.log("a");
console.log("b");
console.log("c");

// adding promise or asychronous code or flow
console.log("d")
setTimeout(() => {
    console.log("e")
    
}, 2000);
console.log("f")

// promise example
 let mypromise = new Promise(
    (resolve,reject)=>{
        let iwillfinishtTheproject =true;
         if(iwillfinishtTheproject){
            resolve("i finisehd the work")
         }
         else{
            reject("sorry;i am too lazay")
         }
    }
 )
//  using promise
console.log("processing promise...")
// consuming promise
mypromise.then(
    (result)=>{
        console.log(result)
    }
).catch(
    (error)=>{
        console.log(`error:${error}`)
    }
).finally(
    ()=>{
        console.log("finally")
    }
)
console.log("after promise")