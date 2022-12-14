import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AuthScreen } from '../screens/AuthScreen';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ShopScreen } from '../screens/ShopScreen';
import { AppointmentsScreen } from '../screens/AppointmentsScreen';
import { MyAppointmentsScreen } from '../screens/MyAppointmentsScreen';
import { SettingsScreen } from '../screens/SettingsScreen';


const Stack = createStackNavigator();

export const StackNavigation = () => {

    const { user } = useContext(AuthContext);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'rgb(245,245,245)'
                }
            }}
        >   
            {
                (user.name)
                    ? (
                        <>
                            <Stack.Screen name="HomeScreen" component={ HomeScreen } />
                            <Stack.Screen name="ShopScreen" component={ ShopScreen } />
                            <Stack.Screen name="AppointmentsScreen" component={ AppointmentsScreen } />
                            <Stack.Screen name="MyAppointmentsScreen" component={ MyAppointmentsScreen } />
                            <Stack.Screen name="SettingsScreen" component={ SettingsScreen } />
                        </>
                    )
                    : <Stack.Screen name="AuthScreen" component={ AuthScreen } />
            }
        </Stack.Navigator>
    )
}