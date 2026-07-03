//  new promise
let mypromisea =new Promise(
    (resolve,reject)=>{
        let achievemydream=false;

        if(achievemydream)
        {
            resolve("yes, i achieved it")
        }
        else{
            reject("today, i failed it")
        }
    }
)
// using the async and await for this promise
// asynic =>a.fucntion that return the promise
// await=> wait for the promise until it resolve or reject

let myAsyncfunc = async ()=>{
    return mypromisea

}
// exception handling uisng catch and finally

let result=await myAsyncfunc()
console.log("result :",result)

try{

}catch(e){
    console.log("errror inside catch block=",e)
}finally{
    // await executed
    console.log("finally block")
}
console.log("after async and await")
