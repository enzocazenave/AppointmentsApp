import { useNavigation } from "@react-navigation/core";
import { useContext } from "react"
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons";
import { UiContext } from "../context/UiContext"

export const DrawerModal = () => {

    const { isDrawerOpen, setIsDrawerOpen } = useContext(UiContext);
    const navigation = useNavigation();

    return (
        <Modal
            animationType="slide"
            transparent={ true }
            visible={ isDrawerOpen }
        >
            <View style={ styles.modal } onPress={ () => console.log('hola') }>
                <TouchableOpacity 
                    onPress={ () => {
                        navigation.navigate('HomeScreen');
                        setIsDrawerOpen(false);
                    }} 
                    style={ styles.button }
                > 
                    <Icon name="pricetag-outline" size={ 16 } color={ '#eee' } />
                    <Text style={ styles.buttonText }>Comercios</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={ () => {
                        navigation.navigate('MyAppointmentsScreen') 
                        setIsDrawerOpen(false);
                    }}
                    style={ styles.button } 
                >
                    <Icon name="calendar-outline" size={ 16 } color={ '#eee' } />
                    <Text style={ styles.buttonText }>Mis turnos</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={ () => {
                        navigation.navigate('SettingsScreen')
                        setIsDrawerOpen(false);
                    }}
                    style={ styles.button } 
                >
                    <Icon name="settings-outline" size={ 16 } color={ '#eee' } />
                    <Text style={ styles.buttonText }>Configuracion</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    modal: {
        height: '50%',
        top: '50%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#333',
        width: '100%',
        padding: 10
    },
    backdropStyle: {
        backgroundColor: 'rgba(0,0,0,0.60)'
    },  
    text: {
        textAlign: 'center'
    },
    button: {
        borderColor: '#252525',
        borderBottomWidth: 1,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#eee',
        marginLeft: 20
    }
});