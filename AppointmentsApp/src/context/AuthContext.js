import { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [action, setAction] = useState('login');
    const [user, setUser] = useState({
        name: 'Enzo'
    });

    return (
        <AuthContext.Provider
            value={{
                action,
                user,
                setAction,
                setUser
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}