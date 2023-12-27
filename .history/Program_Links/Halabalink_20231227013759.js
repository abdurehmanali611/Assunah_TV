import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";


const Halabalink = () => {

    return <View>
    <Text style = {{marginVertical: 20,textAlign: 'center', fontSize: 19}}>Halaba language Programs</Text>
    <View>
        <Text style = {{marginVertical: 20,textAlign: 'center', fontSize: 19}}>Education</Text>
        <View>
            <TouchableOpacity
            style = {styles.halabaders}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=PPQQwckW6Xw&list=PLZaq281_mc40K05Q7emOAJqkZpt8JyHh2&pp=iAQB')}
            >
                <Text>Halabgna Educations</Text>
            </TouchableOpacity>
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

export default Halabalink