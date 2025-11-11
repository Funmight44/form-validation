import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate()
    const [form, setForm] =useState({username: '', email: '', password: '' })
    const [error, setError] =useState({})
    const [loading, setloading] =useState(false) 
    const [warning, setWarning] = useState('')

    useEffect(() => {
        const newErrors = {}
        if(!form.username.trim()) newErrors.username = "Username is required"
        if(!form.email.trim()) newErrors.email = "email is required"
        else if(!/\S+@\S+\.\S+/.test(form.email)) newErrors = 'email is invalid'
        if(!form.password && form.password.length < 6) newErrors.password = "password must have at least six chars"
        setError(newErrors)

       form.email === "test@gmail.com" ? setWarning('This email is for test only') : setWarning('')
    }, [form])

    function handleChange(e){
        setForm({...form, [e.target.name] : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        Object.keys(error).length === 0 && navigate('/onboard')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required value={form.username} onChange={handleChange} />
                 {error.username && <span>{error.username}</span>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required  value={form.email} onChange={handleChange}/>
                {error.email && <span>{error.email}</span>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required  value={form.password} onChange={handleChange}/>
                 {error.password && <span>{error.password}</span>}
            </div>
            <button type="submit" disabled={Object.keys(error).length > 0}>Sign Up</button>
        </form>
      );
}
 
export default SignUp;