import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    return (!user.id)
        ? children
        : <Navigate to="/"/>
}