import classes from '../styles/pages/SettingsPage.module.css';

export const SettingsPage = () => {
    return (
        <div className={ classes.container }>
            <div className={ classes.header }>
                <h1 className={ classes.headerTitle }>Configuración</h1>

                <button className={ classes.notifications }>
                    <i className="far fa-bell"></i>
                </button>
            </div>
        </div>
    )
}