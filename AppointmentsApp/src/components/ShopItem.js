import { useNavigation } from "@react-navigation/core";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native"

export const ShopItem = ({ shop }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={ 0.8 }
            onPress={ () => navigation.navigate('ShopScreen', shop) }
        >
            <ImageBackground 
                resizeMode="cover"
                style={ styles.container } 
                source={{ url: shop.image }}
                borderRadius={ 15 }
                backgroundColor={ '#000' }
                blurRadius={ 3 }
            >
                <View style={{ ...StyleSheet.absoluteFillObject, ...styles.info }}>
                    <Text style={ styles.name }>{ shop.name }</Text>
                    <Text style={ styles.type }>{ shop.type }</Text>
                    <Text style={ styles.location }>{ shop.location }</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        height: 135,
    },
    info: {
        backgroundColor: '#0006',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        color: '#eee',
        fontSize: 30,
        fontWeight: 'bold',
    },
    type: {
        color: '#eee',
        fontSize: 17,
    },
    location: {
        flexDirection: 'row',
        color: '#eee',
        marginTop: 15,
        fontSize: 15,
    }
});
