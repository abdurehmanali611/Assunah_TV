import React from "react";
import { StyleSheet } from "react-native";
import { Linking, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const Tigraylink = ({navigation}) => {

    return <View style = {{backgroundColor: randomRGB(), flex: 1, justifyContent: 'center'}}>
        <Text style = {styles.header}>Tigrigna language Programs</Text>
        <View>
            <Text style = {sy}>Education</Text>
            <View>
                <TouchableOpacity
                style = {styles.tigriders}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=JyU4fu0QhAw&list=PLZaq281_mc40j69qutAdFlSY3jpSzHmzl&pp=iAQB')}
                >
                    <Text>Tigrigna Educations</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <TouchableOpacity
            style = {styles.previoustigray}
            onPress={() => navigation.navigate('Tigray')}
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
    tigriders: {
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
    previoustigray: {
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

export default Tigraylink