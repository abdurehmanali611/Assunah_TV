import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const Afarlink = () => {

    return <View>
        <Text style = {{marginVertical: 20, textAlign: 'center', fontSize: 19}}>Afar language schedules</Text>
        <View>
            <Text style = {{marginVertical: 20, textAlign: 'center', fontSize: 19}}>Education</Text>
            <View>
                <TouchableOpacity
                style = {styles}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=D3HWMIlFyBE&list=PLZaq281_mc43BjJofr5omaXHUci6lgonP&pp=iAQB')}
                >
                    <Text>Education in Afar language</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

}

export default Afarlink