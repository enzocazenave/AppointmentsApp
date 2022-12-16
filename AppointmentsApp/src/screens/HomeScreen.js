import { FlatList, StatusBar } from 'react-native'
import { Navbar } from '../components/Navbar';
import { ShopItem } from '../components/ShopItem';

export const HomeScreen = ({ navigation }) => {

    const shops = [/*{ name: 'Sizo Gerard', type: 'Peluqueria', image: 'https://phantom-elmundo.unidadeditorial.es/37812441ebf2e1d7b564b23077108513/resize/640/assets/multimedia/imagenes/2021/11/17/16371506566138.png', location: 'Calle 13 n1450, Berazategui.' }, { name: 'Peladitos', type: 'Peluqueria', image: 'https://phantom-elmundo.unidadeditorial.es/37812441ebf2e1d7b564b23077108513/resize/640/assets/multimedia/imagenes/2021/11/17/16371506566138.png', location: 'Calle 7 n1245, Berazategui.' }*/];

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