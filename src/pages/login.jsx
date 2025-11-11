import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [form, setForm] = useState({email: '', password: ''})
    const [error, setError] =useState({});
    const [loading, setLoading] = useState('')
    const navigate = useNavigate()
    
    useEffect(() => {
        const newErrors = {}
        if(!form.email) newErrors.email ='email is required'
        else if(!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "email is invalid"
        if(!form.password) newErrors.password = "password is required"
        else if(form.password.length < 6) newErrors.password = "password must have atleast 6 chars"
        setError(newErrors)
    }, [])

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        Object.keys(error).length === 0 && navigate('/dashboard')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" id="email" name="email" required value={form.email} onChange={handleChange} />
                {error.email && <span>{error.email}</span>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required value={form.password} onChange={handleChange}/>
                {error.password && <span>{error.password}</span>}
            </div>
            <button type="submit" disabled={Object.keys(error).length < 0}>Login</button>
             <button type="submit" onClick={() => navigate('/forget')}>forget password</button>
        </form>
     );
}
 
export default Login;