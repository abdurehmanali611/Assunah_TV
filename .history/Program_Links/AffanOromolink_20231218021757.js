import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
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
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=IPN2LiMtTTA&list=PLZaq281_mc43QxfIaBowIxUx3QpOsSgH6&pp=iAQB')}
                    >
                        <Text>Affan Oromo ders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=uesK1WXvcnk&list=PLZaq281_mc41LTZR2MoGskjBr2lggVL79&pp=iAQB')}
                    >
                        <Text>Nefaisul Muhaderah</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>

}

const styles = StyleSheet.create ({
    oromotouch: {
        marginVertical: 20,
        backgroundColor: `rgb(150,100,20)`,
        width: 200,
        height: 80,
        alig
    }
})

export default AffanOromolink