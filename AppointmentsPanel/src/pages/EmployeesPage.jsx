import classes from '../styles/pages/EmployeesPage.module.css';

export const EmployeesPage = () => {
    return (
        <div className={ classes.container }>
            <div className={ classes.header }>
                <h1 className={ classes.headerTitle }>Empleados</h1>

                <button className={ classes.notifications }>
                    <i className="far fa-bell"></i>
                </button>
            </div>
        </div>
    )
}