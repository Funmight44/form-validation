import { useState } from "react";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, useSearchParams } from "react-router-dom";


const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const oobCode = searchParams.get("oobCode");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!oobCode) {
            setError("Invalid or expired reset link.");
            setLoading(false);
            return;
        }

        try {
            await confirmPasswordReset(auth, oobCode, password);
            setMessage("Password reset successfully!");
            setLoading(false);
            setTimeout(() => navigate("/login"), 2000);
            setPassword('')
        } catch (err) {
            console.error(err);
            setError("Failed to reset password. Try again.");
            setLoading(false);
        }
    };

    return ( 
        <div className="reset-password">
            <h2>Set New Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="password">New Password:</label>
                    <input type="password" name="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}required />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Resetting..." : "Reset Password"}
                </button>
            </form>
            {message && <p style={{ color: "green" }}>{message}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
     );
}
 
export default ResetPassword;