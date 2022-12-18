import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { ShopContext } from "../context/ShopContext";
import api from "../api/api";

export const useShopContext = () => {
    
    const { user } = useContext(AuthContext);
    const [isFetching, setIsFetching] = useState(false);
    const { setShop } = useContext(ShopContext);


    const getShop = async() => {
        setIsFetching(true);

        try {
            const { data } = await api.get(`/shop/id/${ user.id }`);
            delete data.ok;

            setShop(data);
            setIsFetching(false);
        } catch(error) {
            setIsFetching(false);
            console.log(error);
        }
    }
    
    return {
        isFetching,
        getShop
    }
}
