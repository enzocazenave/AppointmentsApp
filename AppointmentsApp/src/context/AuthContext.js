import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';
import api from '../api/api';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [action, setAction] = useState('login');
    const [isChecking, setIsChecking] = useState(true);
    const [user, setUser] = useState({});

    useEffect(() => {
        validateToken();
    }, []);

    const validateToken = async() => {
        setIsChecking(true);
        
        try {
            const { data } = await api.get('/auth/validate');

            if (!data.ok) {
                await AsyncStorage.removeItem('@appointments:token');
                setIsChecking(false);
                return;
            }
            
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
                action,
                user,
                setAction,
                setUser,
                isChecking
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}