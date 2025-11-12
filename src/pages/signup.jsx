import {useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpValidation } from "../components/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
    const navigate = useNavigate()
    const [form, setForm] =useState({username: '', email: '', password: '' })
    const [error, setError] =useState({})
    const [loading, setloading] =useState(false) 

    function handleChange(e){
        setForm({...form, [e.target.name] : e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault();
        const validationErrors = signUpValidation(form)
        setError(validationErrors);
        if(Object.keys(validationErrors).length > 0 )return
        setloading(true)
        
        try{
            const usersCredendials = await createUserWithEmailAndPassword(auth, form.email, form.password)
            const user = usersCredendials.user;
            await setDoc(doc(db, "users", user.uid), {
                name: form.username,
                email: form.email,
                createdAt: new Date(),
            });
            setloading(false)
            setTimeout(() => {
               navigate('/onboarding')
            }, 2000)
        
        }catch(error){
            setloading(false);
           if (error.code === 'auth/email-already-in-use'){
            setError({email: 'Email already in use'})}
            
            setTimeout(() => {
              navigate('/login')
            }, 2000)
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required value={form.username} onChange={handleChange} />
                 {error.username && <span style={{ color: 'red' }}>{error.username}</span>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required  value={form.email} onChange={handleChange}/>
                {error.email && <span style={{ color: 'red' }}>{error.email}</span>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required  value={form.password} onChange={handleChange}/>
                 {error.password && <span style={{ color: 'red' }}>{error.password}</span>}
            </div>
            <button type="submit" disabled={loading}>{loading ? 'creating account...' : 'Sign Up'}</button>
        </form>
      );
}
 
export default SignUp;