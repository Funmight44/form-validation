const Onboarding = () => {
    return ( 
        <form>
            <h2>Onboarding</h2>
            <div>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" required />
            </div>

            <div>
                <label htmlFor="country">country:</label>
                <input type="number" id="country" name="country" required />
            </div>
            <div>
                <label htmlFor="bio">Bio:</label>
                <textarea id="bio" name="bio" required></textarea>
            </div>
            <button type="submit">Complete Onboarding</button>
        </form>
     );
}
 
export default Onboarding;