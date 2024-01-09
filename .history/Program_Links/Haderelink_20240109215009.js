import React from "react";
import { StyleSheet } from "react-native";
import { Linking, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const Haderelink = ({navigation}) => {

    return <View style = {{backgroundColor: randomRGB(), flex: 1, justifyContent: ''}}>
        <Text style = {{marginVertical: 20,textAlign: 'center', fontSize: 19}}>Hadere language Programs</Text>
        <View>
            <Text style = {{marginVertical: 20,textAlign: 'center', fontSize: 19}}>Education</Text>
            <View>
                <TouchableOpacity
                style = {styles.hadereders}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=l3pxNGNi9bs&list=PLZaq281_mc40muDLk9PXprEzItvOUf3NG&pp=iAQB')}
                >
                    <Text>Hadere Educations</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <TouchableOpacity
            style = {styles.previoushadere}
            onPress={() => navigation.navigate('hadere')}
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
    hadereders: {
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
    previoushadere: {
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

export default Haderelink