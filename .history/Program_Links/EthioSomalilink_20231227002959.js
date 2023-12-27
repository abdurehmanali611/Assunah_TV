import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const EthioSomalilink = () => {

    return <View>
        <Text style = {{marginVertical: 20,textAlign: 'center', fontSize: 19}}>Ethio Somali language Programs</Text>
        <View>
            <Text style = {{marginVertical: 20,textAlign: 'center', fontSize: 19}}>Education</Text>
            <View>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=NRCymX6dl5A&list=PLZaq281_mc40MJ-OfoWgf9LcRycxb8Eye&pp=iAQB')}
                >
                    <Text>Ethio Somali Educations</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

}



export default EthioSomalilink