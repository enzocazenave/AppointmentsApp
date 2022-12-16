import api from "../api/api";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const useFetch = () => {
    
    const { user } = useContext(AuthContext);
    const [ fetchError, setFetchError ] = useState('');
    const [ isFetching, setIsFetching ] = useState(false);

    const getUserData = async() => {
        setIsFetching(true);
        
        try {
            const { data } = await api.get(`/user/${ user.id }`);               
            delete data.ok;
            setIsFetching(false);
            return data;
        } catch(error) {
            setFetchError('Ocurrió un error al cargar los datos del usuario.');
            setIsFetching(false);
        }
    }

    return {
        getUserData,
        isFetching,
        fetchError
    }
}