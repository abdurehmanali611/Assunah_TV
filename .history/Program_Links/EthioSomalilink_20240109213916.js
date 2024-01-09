import React from "react";
import { StyleSheet } from "react-native";
import { Linking, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const EthioSomalilink = ({navigation}) => {

    return <View>
        <Text style = {styles.}>Ethio Somali language Programs</Text>
        <View>
            <Text style = {{marginVertical: 20,textAlign: 'center', fontSize: 19}}>Education</Text>
            <View>
                <TouchableOpacity
                style = {styles.somaliders}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=NRCymX6dl5A&list=PLZaq281_mc40MJ-OfoWgf9LcRycxb8Eye&pp=iAQB')}
                >
                    <Text>Ethio Somali Educations</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <TouchableOpacity
            style = {styles.previoussomali}
            onPress={() => navigation.navigate('Somali')}
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
    somaliders: {
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
    previoussomali: {
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

export default EthioSomalilink