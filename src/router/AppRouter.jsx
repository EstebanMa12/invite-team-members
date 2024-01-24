

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PublicRoutes from "./PublicRouter";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LoginWithPhone from "../pages/LoginWithPhone";
import Home from "../pages/Home";

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="Login" element={<Login/>} />
                <Route path="/login/loginWithPhone" element={<LoginWithPhone/>} />
                <Route path="Register" element={<Register/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;