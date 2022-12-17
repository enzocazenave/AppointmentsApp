import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { LoginPage } from "../pages";
import { LoadingPage } from "../pages/LoadingPage";
import { AppRoutes } from "./routes/AppRoutes";


export const AppRouter = () => {
    
    const { user, isChecking } = useContext(AuthContext);

    if (isChecking) return (
        <LoadingPage />
    )

    return (
        <Routes>
            { 
                (user.id) 
                    ? <Route path="/*" element={ <AppRoutes /> } />
                    : <Route path="/auth/login" element={ <LoginPage /> } />
            }

            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
        </Routes>
    )
}
