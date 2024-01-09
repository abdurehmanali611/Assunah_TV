import React from "react";
import { StyleSheet } from "react-native";
import { Linking, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const Afarlink = ({navigation}) => {

    return <View>
        <Text style = {styles.header}>Afar language schedules</Text>
        <View>
            <Text style = {styles.title}>Education</Text>
            <View style = {styles.grouptouch}>
            <View>
                <TouchableOpacity
                style = {styles.afarders}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=D3HWMIlFyBE&list=PLZaq281_mc43BjJofr5omaXHUci6lgonP&pp=iAQB')}
                >
                    <Text>Education in Afar language</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        <View>
            <TouchableOpacity
            style = {styles.previousafar}
            onPress={() => navigation.navigate('Afar')}
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
    afarders: {
        marginVertical: 20,
        backgroundColor: randomRGB(),
        width: 200,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderTopStartRadius: 30,
        borderBottomEndRadius: 30
    },
    previousafar: {
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

export default Afarlink