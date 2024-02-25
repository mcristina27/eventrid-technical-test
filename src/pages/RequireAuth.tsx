import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

const RequireAuth: React.FC<{ children: ReactNode }> = ({ children }) => {

    const isLoggedIn = localStorage.getItem('auth') === 'true';
    let location = useLocation();
    if (!isLoggedIn) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return <div>{children}</div>;
};
export default RequireAuth;