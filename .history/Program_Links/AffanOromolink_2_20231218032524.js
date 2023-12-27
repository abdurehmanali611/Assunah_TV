import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native";

const AffanOromolink_2 = () => {

    return <ScrollView>
        <View>
        <Text style = {{fontSize: 18, textAlign: 'center', marginVertical: 20}}>Affan Oromo program schedule 2</Text>
            <View>
                <Text style = {{fontSize: 18, textAlign: 'center', marginVertical: 20}}>Seasonal programs</Text>
                <View>
                     <TouchableOpacity
                     onPress={() => Linking.openURL('')}
                     >
                        <Text></Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                     onPress={() => Linking}
                     >
                        <Text></Text>
                     </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>

}

export default AffanOromolink_2