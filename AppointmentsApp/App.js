import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/Navigation';
import { AuthProvider } from './src/context/AuthContext';
import { UiProvider } from './src/context/UiContext';
import { DrawerModal } from './src/components/DrawerModal';

export const App = () => {
    return (
        <NavigationContainer>
            <UiProvider>
                <AuthProvider>
                    <DrawerModal />
                    <StackNavigation />
                </AuthProvider>
            </UiProvider>
        </NavigationContainer>
    )
}