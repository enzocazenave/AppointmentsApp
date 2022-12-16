import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Navbar } from "../components/Navbar"
import { useAuth } from "../hooks/useAuth"
import { useFetch } from "../hooks/useFetch";

export const SettingsScreen = () => {

    const { logout } = useAuth();
    const { getUserData, isFetching } = useFetch();
    const [ userData, setUserData ] = useState({});
    const { bottom } = useSafeAreaInsets();

    useEffect(() => {
        getUserData().then(res => setUserData(res));
    }, []);

    return (
        <>
            <Navbar title="Configuracion" />

            <View style={{ ...styles.container, paddingBottom: bottom }}>
                <View>
                    {
                        (isFetching) 
                            ? (
                                <View style={{ flex: 1, marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                                    <ActivityIndicator size={ 'large' } color={ '#0059F6' } />
                                </View>
                            )
                            : (
                                <>
                                    <View style={ styles.infoContainer }>
                                        <Text style={ styles.infoContainerTitle }>Nombre: </Text>
                                        <Text style={ styles.infoContainerText }>{ userData.name }</Text>
                                    </View>

                                    <View style={ styles.infoContainer }>
                                        <Text style={ styles.infoContainerTitle }>Apellido: </Text>
                                        <Text style={ styles.infoContainerText }>{ userData.surname }</Text>
                                    </View>

                                    <View style={ styles.infoContainer }>
                                        <Text style={ styles.infoContainerTitle }>Correo electrónico: </Text>
                                        <Text style={ styles.infoContainerText }>{ userData.email }</Text>
                                    </View>

                                    <View style={ styles.infoContainer }>
                                        <Text style={ styles.infoContainerTitle }>Número de teléfono: </Text>
                                        <Text style={ styles.infoContainerText }>{ userData.phone }</Text>
                                    </View>
                                </>
                            )
                    } 
                        
                </View>
                

                <TouchableOpacity 
                    style={ styles.logoutButton } 
                    onPress={ logout }
                    activeOpacity={ 0.9 }
                >
                    <Text style={ styles.logoutButtonText }>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 5
    },  
    infoContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row'
    },
    infoContainerTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    infoContainerText: {
        fontSize: 16
    },  
    logoutButton: {
        backgroundColor: '#FB3B3B',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 10
    },
    logoutButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});