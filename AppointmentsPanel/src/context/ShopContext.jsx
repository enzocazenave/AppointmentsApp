import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";
import { AuthContext } from "./AuthContext";

export const ShopContext = createContext({});

export const ShopProvider = ({ children }) => {

    const [shop, setShop] = useState({});
    
    return (
        <ShopContext.Provider 
            value={{
                setShop,
                shop
            }}
        >
            { children }
        </ShopContext.Provider>
    )
}