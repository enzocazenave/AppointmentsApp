import React from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './context/AuthContext';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
            <ShopProvider>
                <AppRouter />
            </ShopProvider>
        </AuthProvider>
    </BrowserRouter>,
);