import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


function AuthRequire({ children }: any) {
    const { isAuthenticated } = useAuth();
    const location = useLocation();
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default AuthRequire;
