import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const Afarlink = () => {

    return <View>
        <Text style = {{maegv}}>Afar language schedules</Text>
        <View>
            <Text>Education</Text>
            <View>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=D3HWMIlFyBE&list=PLZaq281_mc43BjJofr5omaXHUci6lgonP&pp=iAQB')}
                >
                    <Text>Education in Afar language</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

}

export default Afarlink