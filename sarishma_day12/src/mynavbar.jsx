import { Link } from "react-router";
const MyNavbar=()=>{
    return(
        <div>
            <h1>my nav bar</h1>
            <link to={"/"}>user home</link>
            <span> &nbsp;</span>
            <link to={"/profile"}>user profile</link>
            <link to={"/userdetails"}>user details</link>




        </div>
    )
}
export default MyNavbar