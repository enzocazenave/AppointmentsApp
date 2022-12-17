import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { LoginPage } from "../pages";
import { LoadingPage } from "../pages/LoadingPage";
import { AppRoutes } from "./AppRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    
    const { isChecking } = useContext(AuthContext);

    if (isChecking) return (
        <LoadingPage />
    )

    return (
        <Routes>
            <Route 
                path="/auth/login" 
                element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                }
            />
            <Route 
                path="/*" 
                element={
                    <PrivateRoute>
                        <AppRoutes />
                    </PrivateRoute>
                }
            />
        </Routes>
    )
}
