import { useNavigation } from '@react-navigation/core';
import { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/Ionicons";
import { UiContext } from '../context/UiContext';

export const Navbar = ({ title }) => {

    const { top } = useSafeAreaInsets();
    const { setIsDrawerOpen, isDrawerOpen } = useContext(UiContext)

    return (
        <View style={{ ...styles.header, paddingTop: top }}>
            <Text style={ styles.title }>{ title }</Text>
            <View>
                <TouchableOpacity
                    onPress={ () => setIsDrawerOpen(!isDrawerOpen) }
                >
                    <Icon 
                        name="menu-outline"
                        size={ 25 }
                        color="#eee"
                        style={{ padding: 5 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0059F6',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#eee',
        padding: 5
    }
});