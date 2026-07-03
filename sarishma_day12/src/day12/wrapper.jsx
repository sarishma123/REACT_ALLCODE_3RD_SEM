import { Outlet } from "react-router"
import MyNavbar from "./mynavbar"

const Wrapper=()=>{
    return(
        <div>
            <MyNavbar/>
            <Outlet/>
            <h6>this is the footer</h6>
        </div>
    )
}
export default Wrapper