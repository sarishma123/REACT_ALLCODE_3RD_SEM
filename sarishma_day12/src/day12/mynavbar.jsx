import "./navbar.css"
import { Link } from "react-router";

const MyNavbar = () => {
    return (
        <nav>
            <h1>My Navbar</h1>

            <Link to="/">User Home</Link>

            <Link to="/profile?name=dipak&roll=45">
                User Profile
            </Link>

            <Link to="/user">User Detail</Link>
        </nav>
    );
};

export default MyNavbar;