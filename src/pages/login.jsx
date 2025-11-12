import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginValidation } from "../components/validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({email: '', password: ''})
    const [error, setError] =useState({});
    const [loading, setLoading] = useState(false)
    
    
    
    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }


   async function handleSubmit(e){
        e.preventDefault()
        const validationErrors = loginValidation(form)
        setError(validationErrors);
       if(Object.keys(validationErrors).length > 0)return
        try{
             setLoading(true)
             const usersCredendials = await signInWithEmailAndPassword(auth, form.email, form.password);
             console.log(usersCredendials.user)
             
             navigate("/dashboard")
        }catch(error){
           if (error.code === "auth/user-not-found") {
            setError({email: "User not found, please sign up" })
            setTimeout(() => navigate('/'), 2000);
            } else if (error.code === "auth/wrong-password") {
               setError({ password: "Incorrect password" });
            }
        } 
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" id="email" name="email" required value={form.email} onChange={handleChange} />
                {error.email && <span style={{ color: 'red' }}>{error.email}</span>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required value={form.password} onChange={handleChange}/>
                {error.password && <span style={{ color: 'red' }}>{error.password}</span>}
            </div>
            {error.user && <span style={{ color: 'red' }}>{error.user}</span>}
            
            <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
             <button type="button" onClick={() => navigate('/forget')}>Forget password</button>
        </form>
     );
}
 
export default Login;