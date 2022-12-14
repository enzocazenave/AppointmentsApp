import { Text, View } from "react-native"

export const AppointmentsScreen = ({ route }) => {

    const shop = route.params;

    return (
        <View>
            <Text>{ JSON.stringify(shop) }</Text>
        </View>
    )
}