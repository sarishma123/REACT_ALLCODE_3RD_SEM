import Dashboard from "./dashboard";
import Login from "./login";

// Destructure props correctly; renamed prop to 'isLoggedIn' for clarity
const InitialPage = ({ isLoggedIn }) => { 
    if (isLoggedIn) {
        return <Dashboard />;
    } else {
        return <Login />; // Capitalized component call
    }
};

export default InitialPage;
