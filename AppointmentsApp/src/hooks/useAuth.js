import { useContext, useState } from 'react';
import api from '../api/api';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {

    const [isChecking, setIsChecking] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [registerError, setRegisterError] = useState('');
    const { setUser } = useContext(AuthContext);

    const login = async(credentials) => {
        const { email, password } = credentials;

        if (email.length == 0) return setLoginError('El correo electrónico es obligatorio');
        if (password.length < 6) return setLoginError('Las contraseñas tienen un mínimo de 6 caractéres');

        setIsChecking(true);

        try {
            const { data } = await api.post('/auth/login', credentials);
            delete data.ok;
            setUser(data);
            setIsChecking(false);
            setLoginError('');
        } catch(error) {
            setLoginError(error.response.data.msg);
            setIsChecking(false);
        }
    }

    const register = async(credentials) => {
        const { name, surname, email, phone, password } = credentials;
        // TODO: Finalizar funcionalidad de registro de usuario
    }
    
    return {
        isChecking,
        login,
        loginError
    }
}
