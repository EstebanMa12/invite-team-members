import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainPage from '../pages/MainPage'

function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<MainPage/>}/>
                <Route path="/contact" element={<h1>Contact</h1>}/>
            </Routes>
        </BrowserRouter>
    )

}
export default AppRouter