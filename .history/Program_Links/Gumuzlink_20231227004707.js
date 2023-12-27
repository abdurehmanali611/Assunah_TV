import React from "react";
import { StyleSheet } from "react-native";
import { Linking, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const Gumuzlink = ({navigation}) => {

    return <View>
            <Text style = {{marginVertical: 20, textAlign: 'center', fontSize: 19}}>Gumuz or Rutangna Program Schedule</Text>
        <View>
            <Text style = {{marginVertical: 20, textAlign: 'center', fontSize: 19}}>Education</Text>
            <View>
                <TouchableOpacity
                style = {styles.rutangnaders}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Cr1g8FDERfI&list=PLZaq281_mc42mFDh0REZgihK0BWofG_iD&pp=iAQB')}
                >
                    <Text>Derss of Rutangna</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
              <TouchableOpacity
              onPress={() => navigation.}
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
    rutangnaders: {
        marginVertical: 20,
        backgroundColor: randomRGB(),
        width: 175,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        alignSelf: 'center'
    }
})

export default Gumuzlink