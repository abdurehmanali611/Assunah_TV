import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const Siltgnalink = () => {

    return <View style = {{backgroundColor: randomRGB(), flex: 1, justifyContent: 'center'}}>
        <Text style = {styles.header}>Siltgna Program schedule</Text>
        <View>
            <Text style = {{marginVertical: 20, textAlign: 'center', fontSize: 19}}>Education and Seasonal Education</Text>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.siltignaders}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=P0Av-PI6TTI&list=PLZaq281_mc41nj0XAkfoDcDXSQI818TS0&pp=iAQB')}
                >
                    <Text>Derss of siltgna</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.siltignaders}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=D9gdRTkTxgw&list=PLZaq281_mc40jHrLAwMW6SKizYnUHHA9x&pp=iAQB')}
                >
                    <Text>The journey of Miracle</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
              <TouchableOpacity
              style = {styles.previoussilte}
              onPress={() => navigation.navigate('siltgna')}
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