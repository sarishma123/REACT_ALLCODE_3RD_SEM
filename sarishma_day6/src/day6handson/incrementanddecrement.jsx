import { useState } from "react"

let CountApp=()=>{
    let [count,setcount]=useState(0)
    let increment=()=>{
        setcount(count+1)
    }
    let decrement=()=>{
        setcount(count-1)
    }
    let reset=()=>{
        setcount(0)
    }
    return(
    <div>
        <h1>count:{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>

    </div>
    )
}

export default CountApp