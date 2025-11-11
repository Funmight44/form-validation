import {useEffect, useState } from "react";

const Login = () => {
    const [form, setForm] = useState({email: '', password: ''})
    const [error, setError] =useState({})
    
    useEffect(() => {
        
    }, [])


    return ( 
        <form>
            <h2>Login</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
     );
}
 
export default Login;