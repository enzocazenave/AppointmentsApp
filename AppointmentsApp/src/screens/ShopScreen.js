import { Image, StyleSheet, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Navbar } from "../components/Navbar";

export const ShopScreen = ({ route, navigation }) => {
    
    const shop = route.params;

    return (
        <>
            <Navbar title={ shop.name } />
            <Image 
                source={{ url: shop.image }}
                style={ styles.image }
            />
            <Text style={ styles.subTitle }>{ shop.type }</Text>
            <Text style={ styles.title }>{ shop.name }</Text>
            <Text style={ styles.subTitle }>{ shop.location }</Text>
            <Text style={ styles.text }>
                Incididunt elit aliqua laborum minim occaecat. Sit consequat cillum nisi adipisicing ullamco labore labore. Ullamco ex anim culpa amet consequat proident duis et consequat ullamco irure esse.
            </Text>
            <TouchableOpacity
                activeOpacity={ 0.8 }
                style={ styles.button }
                onPress={ () => navigation.navigate('AppointmentsScreen', shop) }
            >
                <Text style={ styles.buttonText }>Reservar turno</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 135,
        margin: 10,
        borderRadius: 15
    },
    subTitle: {
        fontSize: 14,
        marginLeft: 10,
    },
    title: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 12,
        margin: 10
    },
    button: {
        margin: 10,
        backgroundColor: '#0059F6',
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        color: '#eee',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
});