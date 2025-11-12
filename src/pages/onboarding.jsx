import { useNavigate } from "react-router-dom";
import {doc, updateDoc} from 'firebase/firestore'
import { auth, db } from "../firebase";
import { useState } from "react";
import { onboardingValidation } from "../components/validate";


const Onboarding = () => {
    const [form, setForm] = useState({fullName: '', age: '', country: '', bio: ''})
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()
        const validationErrors = onboardingValidation(form)
        setError(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;
        setLoading(true)

        const user = auth.currentUser;
        if (!user) {
         setError({ general: "User not authenticated" });
          return;
        }
        try{
             await updateDoc(doc(db, "users", user.uid), {
             fullName: form.fullName,
             age: form.age,
             country: form.country,
             bio: form.bio,
             onboardingComplete: true,
             });
                setLoading(false)
                navigate('/dashboard')
        } catch(error){
            setLoading(false)
           setError(error.message)
        }
    }
        

    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Onboarding</h2>
            {error.general && <span style={{ color: 'red' }}>{error.general}</span>}
            <div>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required value={form.fullName} onChange={handleChange} />
                {error.fullName && <span style={{ color: 'red' }}>{error.fullName}</span>}
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" required  value={form.age} onChange={handleChange}/>
                 {error.age && <span style={{ color: 'red' }}>{error.age}</span>}
            </div>

            <div>
                <label htmlFor="country">country:</label>
                <input type="country" id="country" name="country" required  value={form.country} onChange={handleChange} />
                 {error.country && <span style={{ color: 'red' }}>{error.country}</span>}
            </div>  
            <div>
                <label htmlFor="bio">Bio:</label>
                <textarea id="bio" name="bio" required  value={form.bio} onChange={handleChange}></textarea>
                 {error.bio && <span style={{ color: 'red' }}>{error.bio}</span>}
            </div>
            <button type="submit" disabled={loading}>  {loading ? 'Submitting...' : 'Complete Onboarding'}</button>
        </form>
     );
}
 
export default Onboarding;