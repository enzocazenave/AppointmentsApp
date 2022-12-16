import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api/api';
import { AuthContext } from '../context/AuthContext';

const validateEmail = (email) => {
    const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!validEmail.test(email)) return false;
    
    return true;
}

export const useAuth = () => {

    const [isChecking, setIsChecking] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [registerError, setRegisterError] = useState('');
    const { setUser } = useContext(AuthContext);

    const login = async(credentials) => {
        const { email, password } = credentials;

        if (email.length == 0) return setLoginError('El correo electrónico es obligatorio.');
        if (!validateEmail(email)) return setLoginError('El correo electrónico no es válido.');
        if (password.length < 6) return setLoginError('Las contraseñas tienen un mínimo de 6 caractéres.');

        setIsChecking(true);

        try {
            const { data } = await api.post('/auth/login', credentials);
            delete data.ok;

            await AsyncStorage.setItem('@appointments:token', data.token);
            delete data.token;

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
        
        if (name.length == 0) return setRegisterError('El nombre es obligatorio.');
        if (surname.length == 0) return setRegisterError('El apellido es obligatorio.');
        if (email.length == 0) return setRegisterError('El correo electrónico es obligatorio.');
        if (!validateEmail(email)) return setRegisterError('El correo electrónico no es válido.');
        if (phone.length == 0) return setRegisterError('El número de teléfono es obligatorio.');
        if (password.length < 6) return setRegisterError('Las contraseñas tienen un mínimo de 6 caractéres.');

        setIsChecking(true);

        try {
            const { data } = await api.post('/auth/register', credentials);
            delete data.ok;

            await AsyncStorage.setItem('@appointments:token', data.token);
            delete data.token;

            setUser(data);
            setIsChecking(false);
            setRegisterError('');
        } catch(error) {
            setRegisterError(error.response.data.msg);
            setIsChecking(false);
        }
    }

    const logout = async() => {
        setIsChecking(true);
        setUser({});
        await AsyncStorage.removeItem('@appointments:token');
        setIsChecking(false);
    }
    
    return {
        isChecking,
        login,
        loginError,
        register,
        registerError,
        logout
    }
}
