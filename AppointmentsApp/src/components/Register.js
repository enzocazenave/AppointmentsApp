import { useContext, useEffect } from 'react';
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext';
import { useAuth } from '../hooks/useAuth';
import { useFade } from '../hooks/useFade';
import { useForm } from '../hooks/useForm';

const initialForm = {
    email: '',
    name: '',
    surname: '',
    phone: '',
    password: ''
}

export const Register = () => {

    const { top } = useSafeAreaInsets();
    const { setAction } = useContext(AuthContext);
    const { email, name, surname, phone, password, onInputChange } = useForm(initialForm);
    const { opacity, fadeIn } = useFade();
    const { register, registerError } = useAuth();
    
    useEffect(() => {
        fadeIn();
    }, []);

    return (
        <Animated.View style={ { ...styles.container, paddingTop: top, opacity: opacity }}>
            <Text style={ styles.title }>Turnos</Text>
            <Text style={ styles.text }>Creá tu cuenta y reservá turnos en tus comercios favoritos asociados a nosotros!</Text>

            <View style={ styles.form }>
                <TextInput 
                    placeholderTextColor="#aaa"  
                    style={ styles.formInput } 
                    placeholder="Correo electrónico"
                    value={ email }
                    onChangeText={ (text) => onInputChange(text, 'email') }
                />
                
                <View style={{ flexDirection: 'row' }}>
                    <TextInput 
                        placeholderTextColor="#aaa"  
                        style={{ ...styles.formInput, flex: 1 }} 
                        placeholder="Nombre" 
                        value={ name }
                        onChangeText={ (text) => onInputChange(text, 'name') }
                    />
                    <TextInput 
                        placeholderTextColor="#aaa"  
                        style={{ ...styles.formInput, flex: 1 }} 
                        placeholder="Apellido" 
                        value={ surname }
                        onChangeText={ (text) => onInputChange(text, 'surname') }
                    />
                </View>

                <TextInput 
                    placeholderTextColor="#aaa"  
                    style={ styles.formInput } 
                    placeholder="Número de teléfono"
                    value={ phone }
                    keyboardType="numeric"
                    onChangeText={ (text) => onInputChange(text, 'phone') }
                />

                <TextInput 
                    placeholderTextColor="#aaa" 
                    secureTextEntry={true} 
                    style={ styles.formInput } 
                    placeholder="Contraseña"
                    value={ password }
                    onChangeText={ (text) => onInputChange(text, 'password') }
                />

                { (registerError) && <Text style={ styles.errorText }>{ registerError }</Text> }


                <TouchableOpacity 
                    style={ styles.formButton }
                    activeOpacity={ 0.8 }
                    onPress={ () => register({ name, surname, email, phone, password }) }
                >
                    <Text style={ styles.formButtonText }>Crear cuenta</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ () => setAction('login') }
                >
                    <Text style={ styles.formButtonTextHaveAccout }>Ya tengo cuenta</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(245,245,245)',
        height: '100%',
        justifyContent: 'center',
        gap: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 25,  
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
        margin: 10,
        marginTop: 5
    },
    form: {
        margin: 10,
    },   
    formInput: {
        backgroundColor: '#eee',
        borderColor: '#aaa',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        margin: 5,
        fontSize: 15,
    },
    formButton: {
        margin: 5,
        marginTop: 15,
        padding: 10,
        backgroundColor: '#0059F6',
        borderRadius: 5,
    },
    formButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600'
    },
    formButtonTextHaveAccout: { 
        color: '#0059F6',
        textAlign: 'center',
        marginTop: 20 
    },
    errorText: {
        color: '#f00',
        textAlign: 'center',
        marginTop: 10
    }
});