import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Linking } from "react-native";

const Halabalink = ({navigation}) => {

    return <View style = {{backgroundColor: randomRGB(), flex: 1, justifyContent: 'center'}}>
    <Text style = {styles.header}>Halaba language Programs</Text>
    <View>
        <Text style = {styles.title}>Education</Text>
        <View style = {styles.grouptouch}>
        <View>
            <TouchableOpacity
            style = {styles.halabaders}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=PPQQwckW6Xw&list=PLZaq281_mc40K05Q7emOAJqkZpt8JyHh2&pp=iAQB')}
            >
                <Text>Halabgna Educations</Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>
    <View>
        <TouchableOpacity
        style = {styles.previoushalaba}
        onPress={() => navigation.navigate('Halaba')}
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
    halabaders: {
        marginVertical: 20,
        backgroundColor: randomRGB(),
        width: 175,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        alignSelf: 'center'
    },
    previoushalaba: {
        marginVertical: 20,
        backgroundColor: randomRGB(),
        width: 175,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        marginHorizontal: 15
    },
    title: {
        fontSize: 19,
        marginVertical: 10,
        backgroundColor: randomRGB(),
        width: 350,
        textAlign: 'center',
        alignSelf: 'center',
        height: 70,
        textAlignVertical: 'center',
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        fontWeight: 'bold'
    },
    header: {
        fontSize: 19,
        marginVertical: 10,
        backgroundColor: randomRGB(),
        width: 350,
        textAlign: 'center',
        alignSelf: 'center',
        height: 85,
        textAlignVertical: 'center',
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        fontWeight: 'bold'
    },
    grouptouch: {
        backgroundColor: randomRGB(),
        marginVertical: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        height: 170
    }
})

export default Halabalink