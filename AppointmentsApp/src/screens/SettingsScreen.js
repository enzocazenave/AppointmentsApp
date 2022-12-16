import { StyleSheet, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Navbar } from "../components/Navbar"
import { useAuth } from "../hooks/useAuth"

export const SettingsScreen = () => {

    const { logout } = useAuth();

    return (
        <>
            <Navbar title="Configuracion" />
            <TouchableOpacity 
                style={ styles.logoutButton } 
                onPress={ logout }
                activeOpacity={ 0.9 }
            >
                <Text style={ styles.logoutButtonText }>Cerrar sesión</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    logoutButton: {
        backgroundColor: '#FB3B3B',
        padding: 10,
        margin: 5,
        borderRadius: 10
    },
    logoutButtonText: {
        color: '#fff',
        textAlign: 'center'
    }
});