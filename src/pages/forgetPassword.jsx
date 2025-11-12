import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const ForgetWord = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setloading] =useState(false)
    const navigate = useNavigate();

    async function handleForgetPassword(e){
        e.preventDefault();
        setloading(true);
        try{
            await sendPasswordResetEmail(auth, email)
            setMessage("password reset link sent, check your email")
            setloading(false)
            setEmail('')
        }catch(error){
            setloading(false)
            setError("Failed to send link, check your email")
        }
    
    }



    return ( 
         
        <div className="forget-password">
            <h2>Reset Password</h2>
            <form onSubmit={handleForgetPassword}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    required/>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Reset Email"}
                </button>
            </form>
            {message && <p style={{ color: "green" }}>{message}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button onClick={() => navigate("/login")}>Back to Login</button>
        </div>
    );
}
 
export default ForgetWord;