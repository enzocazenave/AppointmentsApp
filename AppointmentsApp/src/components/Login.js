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
    password: ''
}

export const Login = () => {

    const { top } = useSafeAreaInsets();
    const { setAction } = useContext(AuthContext);
    const { email, password, onInputChange } = useForm(initialForm);
    const { opacity, fadeIn } = useFade();
    const { login, loginError } = useAuth();

    const disabled = !(email.length > 0 && password.length > 0);

    useEffect(() => {
        fadeIn();
    }, []);

    return (
        <Animated.View style={{ ...styles.container, paddingTop: top, opacity: opacity }}>
            <Text style={ styles.title }>Turnos</Text>
            <Text style={ styles.text }>Iniciá sesión y reservá turnos en tus comercios favoritos asociados a nosotros!</Text>

            <View style={ styles.form }>
                <TextInput 
                    placeholderTextColor="#aaa"  
                    style={ styles.formInput } 
                    placeholder="Correo electrónico"
                    value={ email }
                    onChangeText={ (text) => onInputChange(text, 'email') }
                />
                <TextInput 
                    placeholderTextColor="#aaa" 
                    secureTextEntry={true} 
                    style={ styles.formInput } 
                    placeholder="Contraseña"
                    value={ password }
                    onChangeText={ (text) => onInputChange(text, 'password') }
                />

                { (loginError) && <Text style={ styles.errorText }>{ loginError }</Text> }

                <TouchableOpacity 
                    onPress={ () => login({ email, password }) }
                    style={ styles.formButton }
                    disabled={ disabled }
                >
                    <Text style={ styles.formButtonText }>Iniciar sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ () => setAction('register') }
                >
                    <Text style={ styles.formButtonTextHaveAccout }>
                        ¿No tienes cuenta?<Text style={{ color: '#0059F6' }}> Registrate</Text>
                    </Text>
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
        color: '#aaa',
        textAlign: 'center',
        marginTop: 20 
    },
    errorText: {
        marginTop: 10,
        color: '#f00',
        textAlign: 'center'
    }
});