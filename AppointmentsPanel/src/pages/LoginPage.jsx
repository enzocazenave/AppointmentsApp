import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/';
import classes from '../styles/pages/LoginPage.module.css';

const initialForm = {
    username: '',
    password: ''
}

export const LoginPage = () => {

    const [rememberMe, setRememberMe] = useState(false);
    const { username, password, onInputChange } = useForm(initialForm);
    const { login, loginError } = useContext(AuthContext);
    
    const disableButton = (username.length == 0 || password.length == 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password }, rememberMe);
    } 

    return (
        <div className={ classes.container }>
            {
                (loginError) && (
                    <div className={ classes.alert }>
                        <p className={ classes.alertText }>{ loginError }</p>
                    </div>
                )
            }

            <form className={ classes.form } onSubmit={ handleSubmit }>
                <h1 className={ classes.title }>Panel administrativo</h1>

                <div className={ classes.inputContainer }>
                    <p className={ classes.inputTitle }>Nombre de usuario</p>

                    <input 
                        className={ classes.input } 
                        type="text"
                        placeholder='borendev'
                        name="username"
                        value={ username }
                        onChange={ onInputChange }
                    />
                </div>

                <div className={ classes.inputContainer }>
                    <p className={ classes.inputTitle }>Contraseña</p>

                    <input 
                        className={ classes.input } 
                        type="password"
                        placeholder='*********'
                        name="password"
                        value={ password }
                        onChange={ onInputChange }
                    />
                </div>

                <div className={ classes.rememberContainer }>
                    <input 
                        type="checkbox"
                        value={ rememberMe }
                        onChange={ () => setRememberMe(!rememberMe) }
                    />
                    <p className={ classes.rememberText }>Recuérdame</p>
                </div>
                
                <button
                    disabled={ disableButton }
                    className={ classes.loginButton }
                    style={{ 
                        opacity: disableButton ? 0.7 : null,
                        pointerEvents: disableButton ? 'none' : null
                    }}
                    type="submit"
                >
                    Iniciar sesión
                </button>
            </form>
        </div>
    )
}
