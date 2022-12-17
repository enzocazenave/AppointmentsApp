import React from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './context/AuthContext';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    </BrowserRouter>,
);