import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Sidebar } from '../components/';
import { useShopContext } from '../hooks';
import { AppointmentsPage, ClientsPage, EmployeesPage, MainPage, SettingsPage } from '../pages';
import classes from '../styles/pages/Dashboard.module.css';

export const AppRoutes = () => {

    const { getShop } = useShopContext();

    useEffect(() => {
        getShop();
    }, []);

    return (
        <div className={ classes.container }>
            <Sidebar />

            <Routes>
                <Route path="/" element={ <MainPage /> } />
                <Route path="appointments" element={ <AppointmentsPage /> } />
                <Route path="employees" element={ <EmployeesPage /> } />
                <Route path="clients" element={ <ClientsPage /> } />
                <Route path="settings" element={ <SettingsPage /> } />
                <Route path="/*" element={ <Navigate to="/" /> } />
            </Routes>
        </div>
    )
}