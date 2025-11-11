import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dsahboard";
import SignUp from "../pages/signup";
import Onboarding from "../pages/onboarding";
import ForgetWord from "../pages/forgetPassword";

const AllRoutes = () => {
    return ( 
        <Routes>
             <Route path="/" element={<SignUp/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forget" element={<ForgetWord/>} />
            <Route path="/onboard" element={<Onboarding/>} />
        </Routes>);
} 
 
export default AllRoutes;