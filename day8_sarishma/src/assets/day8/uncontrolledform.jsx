import { useRef } from "react"

const Uncontrollledform=()=>{
    const fullNameref=useRef(null)
    const handleDisplayFullName=()=>{
        alert("fullname:"+fullNameref.current.value);
    }
    return(
        <div>
            <h1>uncontrolled form</h1>
            <input type="text" placeholder="enter your fullname" ref={fullNameref}></input>
            <button onClick={handleDisplayFullName}>display full name</button>
        </div>
    )
}
export default Uncontrollledform