import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import classes from '../styles/components/Sidebar.module.css';

export const Sidebar = ({ title }) => {

    const { logout } = useContext(AuthContext);

    return (
        <div className={ classes.container }>
            <div>
                <h2 className={ classes.title }>Turnos</h2>

                <div className={ classes.section }>
                    <NavLink className={ ({ isActive }) => `${ classes.button } ${ isActive ? classes.selected : '' }` } to="/">
                        <i className='fas fa-home'></i>
                        Panel
                    </NavLink>
                    <NavLink className={ ({ isActive }) => `${ classes.button } ${ isActive ? classes.selected : '' }` } to="/appointments">
                        <i className='far fa-calendar-alt'></i>
                        Turnos
                    </NavLink>
                    <NavLink className={ ({ isActive }) => `${ classes.button } ${ isActive ? classes.selected : '' }` } to="/employees">
                        <i className='fas fa-user-tag'></i>
                        Empleados
                    </NavLink>
                    <NavLink className={ ({ isActive }) => `${ classes.button } ${ isActive ? classes.selected : '' }` } to="/clients">
                        <i className='fas fa-users'></i>
                        Clientes
                    </NavLink>
                    <NavLink className={ ({ isActive }) => `${ classes.button } ${ isActive ? classes.selected : '' }` } to="/settings">
                        <i className='fas fa-cog'></i>
                        Configuración
                    </NavLink>
                </div>
            </div>
            
            <button 
                className={ classes.button }
                onClick={ logout }
            >
                <i className='fas fa-sign-out-alt'></i>
                Cerrar sesión
            </button>
        </div>
    )
}