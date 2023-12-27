import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const Gumuzlink = () => {

    return <View>
            <Text>Gumuz or Rutangna Program Schedule</Text>
        <View>
            <Text>Education</Text>
            <View>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Cr1g8FDERfI&list=PLZaq281_mc42mFDh0REZgihK0BWofG_iD&pp=iAQB')}
                >
                    <Text>Derss of Rutangna</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

}

export default Gumuzlink