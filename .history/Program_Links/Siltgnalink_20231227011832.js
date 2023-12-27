import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const Siltgnalink = () => {

    return <View>
        <Text>Siltgna Program schedule</Text>
        <View>
            <Text>Education</Text>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.rutangnaders}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Cr1g8FDERfI&list=PLZaq281_mc42mFDh0REZgihK0BWofG_iD&pp=iAQB')}
                >
                    <Text>Derss of Rutangna</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.rutangnaders}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=YfGPYp7AnIY&list=PLZaq281_mc423IM0lzzq5ADH7Yte44PjJ&pp=iAQB')}
                >
                    <Text>Derss of Rutangna</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
              <TouchableOpacity
              style = {styles.previousgumuz}
              onPress={() => navigation.navigate('Gumuz')}
              >
                <Text>Previous</Text>
              </TouchableOpacity>
        </View>
        </View>
    </View>

}

export default Siltgnalink