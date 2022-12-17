import classes from '../styles/pages/LoginPage.module.css';

export const LoginPage = () => {
    return (
        <div className={ classes.container }>
            
            <form className={ classes.form }>
                <h1 className={ classes.title }>Panel administrativo</h1>

                <div className={ classes.inputContainer }>
                    <p className={ classes.inputTitle }>Nombre de usuario</p>

                    <input 
                        className={ classes.input } 
                        type="text"
                        placeholder='borendev'
                    />
                </div>

                <div className={ classes.inputContainer }>
                    <p className={ classes.inputTitle }>Contraseña</p>

                    <input 
                        className={ classes.input } 
                        type="password"
                        placeholder='*********'
                    />
                </div>

                <div className={ classes.rememberContainer }>
                    <input type="checkbox" />
                    <p className={ classes.rememberText }>Recuérdame</p>
                </div>
                
                <button
                    className={ classes.loginButton }
                >
                    Iniciar sesión
                </button>
            </form>
        </div>
    )
}
