import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import SignUp from "../pages/signup";
import Onboarding from "../pages/onboarding";
import ForgetWord from "../pages/forgetPassword";
import ProtectedRoute from "./protectedRoute";
import ResetPassword from "../pages/resetPassword";
import Home from "../pages/home";

const AllRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /></ProtectedRoute> } />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/forget" element={<ForgetWord/>} />
            <Route path="/reset" element={<ResetPassword/>} />
            <Route path="/onboarding" element={<ProtectedRoute><Onboarding/></ProtectedRoute>} />
            <Route path="*" element={<SignUp />} />
        </Routes>);
} 
 
export default AllRoutes;