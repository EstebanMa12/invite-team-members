

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivatedRoutes from "./PrivatedRoutes";
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
import InsertCode from "../pages/InsertCode";
import Projects from "../pages/Projects";

function AppRouter(){
    const { isAuthenticate, user }= useSelector(store => store.user)
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
                    <Route element={<PublicRoutes isAuthenticate={isAuthenticate}/>}>
                        <Route path="login" element={<Login/>} />
                        <Route path="login/phone" element={<LoginWithPhone/>} />
                        <Route path="register" element={<Register/>} />
                        <Route path="insert-code" element={<InsertCode/>}/>
                    </Route>
                    <Route element={<PrivatedRoutes isAuthenticate={isAuthenticate}/>}>
                        <Route path="/home" element={<Home/>} />
                        <Route path="/projects" element={<Projects/>}/>
                        <Route index element={<Home/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;