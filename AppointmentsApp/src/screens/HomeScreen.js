import { FlatList, StatusBar } from 'react-native'
import { Navbar } from '../components/Navbar';
import { ShopItem } from '../components/ShopItem';
import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export const HomeScreen = ({ navigation }) => {

    const { getShopsData } = useFetch();
    const [shops, setShops] = useState([]);

    useEffect(() => {
        getShopsData().then(res => setShops(res));
    }, []);

    return (
        <>
            <StatusBar barStyle={ 'light-content' } />
            <Navbar title="Comercios" />
            <FlatList
                data={ shops }
                renderItem={ ({item}) => <ShopItem shop={ item } /> }
                keyExtractor={ (item) => item.name }
            />
        </>
    )
}