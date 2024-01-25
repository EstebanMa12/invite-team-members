import { Navigate, Outlet } from "react-router-dom";


const PrivateRoutes = ({ isAuthenticated, redirectPath = "/login", children }) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <div>{children ? children : <Outlet />}</div>;
};


export default PrivateRoutes;