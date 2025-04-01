import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../public/css/style.css'
import Index from ".";
import Login from "./page/login/Login";
// import Register from "./page/login/Register";
import SignUp from "./page/sign-Up/SignUp";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const Page = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default Page;
