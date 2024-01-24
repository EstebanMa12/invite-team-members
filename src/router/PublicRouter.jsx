import { Navigate, Outlet } from "react-router-dom"

const PublicRoutes = ({ isAuthenticated, redirectPath = "/Login", children }) => {
    if (isAuthenticated) {
        return <Navigate to={redirectPath} replace />
    }
    
    return <div>{children ? children : <Outlet />}</div>
    }



export default PublicRoutes