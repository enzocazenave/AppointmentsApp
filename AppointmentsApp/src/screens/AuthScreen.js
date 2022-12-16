import { useContext } from 'react';
import { Login } from '../components/Login';
import { Register } from '../components/Register';
import { AuthContext } from '../context/AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, View } from 'react-native';

export const AuthScreen = () => {

    const { action, isChecking, user } = useContext(AuthContext);

    if (isChecking) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={ 'large' } color={ '#0059F6' } />
        </View>
    );

    return (
        <SafeAreaProvider>
            { 
                (!user.id) && (
                    (action == 'login') ? <Login /> : <Register />
                ) 
            }
        </SafeAreaProvider>
    )
}