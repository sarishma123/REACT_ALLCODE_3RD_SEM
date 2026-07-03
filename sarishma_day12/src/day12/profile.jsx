import { useSearchParams } from "react-router"

const Profile=()=>{
    let [searchparams]=useSearchParams();
    let name=searchparams.get("name")
    let roll=searchparams.get("roll no")
    return(
        <div>
            <h1>this is the profile</h1>
            <p>this is the profile page of the user</p>
            <p>name:{name}</p>
            <p>Roll no.: {roll}</p>
        </div>
    )
}
export default Profile