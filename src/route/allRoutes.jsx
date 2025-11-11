import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dsahboard";
import SignUp from "../pages/signup";
import Onboarding from "../pages/onboarding";

const AllRoutes = () => {
    return ( 
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/onboard" element={<Onboarding/>} />
        </Routes>);
} 
 
export default AllRoutes;