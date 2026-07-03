let Profile=()=>{
    let handlelogout=(event)=>{
        console.log("event.target")
        event.target.style.backgroundColor="green"
        event.target.style.padding="20px"
        event.target.style.borderRadius="2px"

    }

     let handleFullnameOnChange=(event)=>{
            console.log(event.target.value)
            event.target.style.backgroundColor="khaki"
            event.target.style.padding="10px"
            event.target.style.borderRadius="3px"
        }

    return(
        <div>
            <h1>Profile</h1>
            <input  onChange={handleFullnameOnChange}
            placeholder="enter your full name"/>
            <button onClick={
                (event)=>{
                    console.log("signin button  clicked")
                }
            }>signin</button>
            <button onClick={handlelogout}>signout</button>
        </div>
    )
}
export default Profile