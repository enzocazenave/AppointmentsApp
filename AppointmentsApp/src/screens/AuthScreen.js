import { useContext } from 'react';
import { Login } from '../components/Login';
import { Register } from '../components/Register';
import { AuthContext } from '../context/AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export const AuthScreen = () => {

    const { action } = useContext(AuthContext);

    return (
        <SafeAreaProvider>
            {
                (action == 'login')
                    ? <Login />
                    : <Register />
            }
        </SafeAreaProvider>
    )
}