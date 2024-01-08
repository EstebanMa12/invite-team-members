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
                <Route path="/reports" element={<h1>Reports</h1>}/>
                <Route path="/messages" element={<h1>Messages</h1>}/>
                <Route path="/calendar" element={<h1>Calendar</h1>}/>
                <Route path="/projects" element={<h1>Projects</h1>}/>
                <Route path="/manage-members" element={<h1>Manage Members</h1>}/>
                <Route path="/upgrade" element={<h1>Upgrade to Pro</h1>}/>
                <Route path="/help" element={<h1>Help Center</h1>}/>
                <Route path="/settings" element={<h1>Settings</h1>}/>
            </Routes>
        </BrowserRouter>
    )

}
export default AppRouter