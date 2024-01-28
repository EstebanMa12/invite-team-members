

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
        onAuthStateChanged(auth, (userLogged) => {
            if (userLogged?.uid && !user) {
                dispatch(setIsAuthenticate(true))
                dispatch(setUser({ 
                    id: userLogged.uid, 
                    email: userLogged.email, 
                    name: userLogged.displayName, 
                    photoURL: userLogged.photoURL, 
                    accessToken: userLogged.accessToken 
            }))
              // dispatch(setError(false))
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
                    <Route element={<PublicRoutes isAunthenticate={isAunthenticate}/>}>
                        <Route path="login" element={<Login/>} />
                        <Route path="login/phone" element={<LoginWithPhone/>} />
                        <Route path="register" element={<Register/>} />
                    </Route>
                    <Route element={<PrivatedRoutes isAunthenticate={isAunthenticate}/>}>
                        <Route path="home" element={<Home/>} />
                        <Route index element={<Home/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;