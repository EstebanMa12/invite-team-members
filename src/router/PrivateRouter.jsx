import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const PrivatedRoutes = ({
  isAuthenticate,
  redirectPath = "/Register",
  children,
}) => {
  if (!isAuthenticate) return <Navigate to={redirectPath} />;
  return <div>{children ? children : <Outlet />}</div>;
};

PrivatedRoutes.propTypes = {
    isAuthenticate: PropTypes.bool.isRequired,
    redirectPath: PropTypes.string,
    children: PropTypes.node,
    };


export default PrivatedRoutes;
