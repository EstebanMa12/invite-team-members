

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRouter";
import PrivatedRoutes from "./PrivateRouter";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LoginWithPhone from "../pages/LoginWithPhone";
import Home from "../pages/Home";
import { useSelector } from "react-redux";
import { useState , useEffect} from "react";
import {onAuthStateChanged} from 'firebase/auth'
import { setIsAuthenticate, setUser } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/firebaseConfig";
import { FaLessThanEqual } from "react-icons/fa6";

function AppRouter(){
    const { isAunthenticate, user }= useSelector(store => store.user)
    const [checking, setChecking] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user?.uid && !user){
                dispatch(setIsAuthenticate(true))
                dispatch(setUser({
                    id: user.uid,
                    email: user.email,
                    name: user.displayName,
                    photoUrl: user.photoURL,
                    accessToken: user.accessToken
                }))
            }
    })
    setChecking(false)
    }, [dispatch, user])
    if(checking){
        return <h1>Wait...</h1>
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route element={<PublicRoutes isAunthenticate={false}/>}>
                        <Route path="login" element={<Login/>} />
                        <Route path="login/phone" element={<LoginWithPhone/>} />
                        <Route path="register" element={<Register/>} />
                    </Route>
                    <Route element={<PrivatedRoutes isAunthenticate={true}/>}>
                        <Route path="home" element={<Home/>} />
                        <Route index element={<Home/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;