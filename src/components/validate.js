export function loginValidation(form){
    const newErrors = {}
        if(!form.email) newErrors.email ='email is required'
        else if(!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "email is invalid"
        if(!form.password) newErrors.password = "password is required"
        else if(form.password.length < 6) newErrors.password = "password must have atleast 6 chars"
        return newErrors;
}


    export function signUpValidation(form){
        const newErrors = {}
        if(!form.username.trim()) newErrors.username = "Username is required"
        if(!form.email.trim()) newErrors.email = "email is required"
        else if(!/\S+@\S+\.\S+/.test(form.email)) newErrors = 'email is invalid'
        if(!form.password && form.password.length < 6) newErrors.password = "password must have at least six chars"
        return newErrors
    }


export function onboardingValidation(form){
    const newErrors = {}
        if(!form.fullName) newErrors.fullName ='Full Name is required'
         if(!form.country) newErrors.fullName ='countryis required'
        if(!form.age) newErrors.age = "Age is required"
        else if(isNaN(form.age)) newErrors.age = "the age must be a number"
        return newErrors
}