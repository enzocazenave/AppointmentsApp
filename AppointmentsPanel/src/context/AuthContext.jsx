import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [isChecking, setIsChecking] = useState(false);
    const [loginError, setLoginError] = useState('');
    const { path } = useLocation(); 
    const navigate = useNavigate();

    useEffect(() => {
        validateToken();
    }, []);

    const login = async(credentials, rememberMe) => {
        const { username, password } = credentials;

        if (username.lenght == 0) return setLoginError('El nombre de usuario es obligatorio.');
        if (password.length < 6) return setLoginError('Las contraseñas tienen un mínimo de 6 caractéres.');
        
        setIsChecking(true);

        try {
            const { data } = await api.post('/shop/login', credentials);
            delete data.ok;

            if (rememberMe) {
                localStorage.setItem('@appointments:token', data.token);
            }
            
            delete data.token;

            setUser(data);
            setIsChecking(false);
            setLoginError('');
        } catch(error) {
            setLoginError(error.response.data.msg);
            setIsChecking(false);
        }
    }

    const logout = () => {
        setIsChecking(true);
        
        if (localStorage.getItem('@appointments:token')) {
            localStorage.removeItem('@appointments:token');
        }

        setUser({});
        setIsChecking(false);
    }

    const validateToken = async() => {
        setIsChecking(true);
        
        try {
            const { data } = await api.get('/shop/validate');

            if (!data.ok) {
                localStorage.removeItem('@appointments:token');
                setIsChecking(false);
                return;
            }
            
            navigate(path);
            setUser(data);
            setIsChecking(false);
        } catch(error) {
            setUser({});
            setIsChecking(false);
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider 
            value={{
                login,
                loginError,
                logout,
                user,
                isChecking
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}