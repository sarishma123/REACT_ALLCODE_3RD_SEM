import { useState } from "react"
import Loginbutton from "./loginbutton"

let Stateexample = () => {
    let [count, setcount] = useState(0)
    let [login, setlogin] = useState(true)
    let handleincrement = () => {
        setcount(count + 1)
    }
    return (
        <div>
            <h1>state example</h1>
            <p>count: {count}</p>
            {/* conditional operator */}
            {count % 2 == 0 ? <p>even number </p> : <p>odd number </p>}
            <button onClick={handleincrement}>increment</button>

            {/* logged in and logout */}
            {login ? <button onClick={() => setlogin(false)}>logout</button> : <Loginbutton onClick={() => setlogin(true)} />}
        </div>
    )
}
export default Stateexample
