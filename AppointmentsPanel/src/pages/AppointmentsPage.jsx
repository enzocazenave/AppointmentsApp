import classes from '../styles/pages/AppointmentsPage.module.css';

export const AppointmentsPage = () => {
    return (
        <div className={ classes.container }>
            <div className={ classes.header }>
                <h1 className={ classes.headerTitle }>Turnos</h1>

                <button className={ classes.notifications }>
                    <i className="far fa-bell"></i>
                </button>
            </div>
        </div>
    )
}