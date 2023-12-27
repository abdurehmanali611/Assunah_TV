import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const Siltgnalink = () => {

    return <View>
        <Text>Siltgna Program schedule</Text>
        <View>
            <Text>Education</Text>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.siltignaders}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=P0Av-PI6TTI&list=PLZaq281_mc41nj0XAkfoDcDXSQI818TS0&pp=iAQB')}
                >
                    <Text>Derss of siltgna</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.siltignaders}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=YfGPYp7AnIY&list=PLZaq281_mc423IM0lzzq5ADH7Yte44PjJ&pp=iAQB')}
                >
                    <Text>Derss of Rutangna</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
              <TouchableOpacity
              style = {styles.previoussilte}
              onPress={() => navigation.navigate('Gumuz')}
              >
                <Text>Previous</Text>
              </TouchableOpacity>
        </View>
        </View>

}

const randomRGB = () => {

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create ({
    siltignaders: {
        marginVertical: 20,
        backgroundColor: randomRGB(),
        width: 175,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        marginHorizontal: 9
    },
    previoussilte: {
        marginVertical: 20,
        backgroundColor: randomRGB(),
        width: 175,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        marginHorizontal: 15
    }
})

export default Siltgnalink