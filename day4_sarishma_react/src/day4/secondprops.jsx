import { useState } from "react"

let Secondprops=()=>{
    let state = useState(30)
    console.log(state) //let [a,b]=[undefined,f]
    // here is a sate and b is upgrader fucntion

    // destructuring in state
    let [count, Statecount] =useState(0)
    let handleIncrement=()=>{
     Statecount(count+1)
        console.log( "incremental value :",count)
    }
    return(
        <div>
            <h1>second props</h1>
            <h4>coujnt:{count}</h4>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )

}
export default Secondprops    