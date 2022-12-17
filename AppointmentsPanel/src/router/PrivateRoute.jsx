import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';


export const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    return (user.id)
        ? children
        : <Navigate to="/auth/login" />
}