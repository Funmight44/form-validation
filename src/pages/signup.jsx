import { useState } from "react";

const SignUp = () => {
    const [form, setForm] =useState({username: '', email: '', password: '' })
    const [error, setError] =useState({})
    const [loading, setloading] =useState(false) 





    return (
        <form>
            <h2>Sign Up</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Sign Up</button>
        </form>
      );
}
 
export default SignUp;