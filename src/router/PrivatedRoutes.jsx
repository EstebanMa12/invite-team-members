import { Navigate, Outlet } from "react-router-dom";


const PrivatedRoutes = ({ 
  isAuthenticated, 
  redirectPath = "/register", 
  children 
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} />;
  }

  return <div>{children ? children : <Outlet />}</div>;
};


export default PrivatedRoutes;