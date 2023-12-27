import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";

const AffanOromolink = () => {

    return <ScrollView>
        <View>
            <View>
                <Text>Education</Text>
                <View>
                    <TouchableOpacity
                    onPress={() => Linking.openURL()}
                    >
                        <Text>Affan Oromo ders</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>

}

export default AffanOromolink