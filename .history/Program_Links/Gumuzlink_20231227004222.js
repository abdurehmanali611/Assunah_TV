import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const Gumuzlink = () => {

    return <View>
            <Text>Gumuz or Rutangna Program Schedule</Text>
        <View>
            <Text>Education</Text>
            <View>
                <TouchableOpacity
                onPress={() => Link}
                >
                    <Text>Derss of Rutangna</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

}

export default Gumuzlink