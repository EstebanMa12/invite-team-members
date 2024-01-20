import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ isAuthenticate, redirectPath = "/home", children }) => {
    if (isAuthenticate) return <Navigate to={redirectPath} />;
    return <div>{children ? children : <Outlet />}</div>;
};

PublicRoutes.propTypes = {
    isAuthenticate: PropTypes.bool.isRequired,
    redirectPath: PropTypes.string,
    children: PropTypes.node,
};

export default PublicRoutes;