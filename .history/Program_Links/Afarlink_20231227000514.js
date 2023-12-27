import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const Afarlink = () => {

    return <View>
        <Text>Afar language schedules</Text>
        <View>
            <Text>Education</Text>
            <View>
                <TouchableOpacity
                onPress={() => Linking.openURL('')}
                >
                    <Text>Education in Afar language</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

}

export default Afarlink