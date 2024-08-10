import { useContext } from "react";
import { UserContext } from "./UserContext";
export const User = () => {

    const handleLogin = () => {
        
    }
    const handleLogout = () => {
        
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User Name is </div>
            <div>User Email is </div>
        </div>
    )
}

