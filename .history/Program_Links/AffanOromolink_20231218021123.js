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
                <View style = {{display: 'flex'}}>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=IPN2LiMtTTA&list=PLZaq281_mc43QxfIaBowIxUx3QpOsSgH6&pp=iAQB')}
                    >
                        <Text>Affan Oromo ders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=IPN2LiMtTTA&list=PLZaq281_mc43QxfIaBowIxUx3QpOsSgH6&pp=iAQB')}
                    >
                        <Text>Nefaisul Muhaderah</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>

}

export default AffanOromolink