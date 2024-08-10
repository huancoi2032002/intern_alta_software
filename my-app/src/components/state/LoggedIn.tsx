import { useState } from "react"

export const LoggedIn = () => {

    const [isLoggeIn, setIsLoggeIn] = useState(false);

    const handleLogin = () => {
        setIsLoggeIn(true)
    }
    const handleLogout = () => {
        setIsLoggeIn(false)
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggeIn ? 'Logged In' : 'logged out'}</div>
        </div>
    )
}

