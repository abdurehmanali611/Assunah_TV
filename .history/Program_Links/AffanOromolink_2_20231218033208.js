import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
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
                     style = {styles.seasontouch}
                     onPress={() => Linking.openURL('https://www.youtube.com/watch?v=CB2NhV5s1O8&list=PLZaq281_mc42UNgJMpXBTszlYPfxX1o8w&pp=iAQB')}
                     >
                        <Text>Halkanoowwan ramadaana</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                     style = {styles.seasontouch}
                     onPress={() => Linking.openURL('https://www.youtube.com/watch?v=3lIRjhdCKY8&list=PLZaq281_mc40q4ZP95ol8zbriSoW5UMF-&pp=iAQB')}
                     >
                        <Text>Barnoota hajjii</Text>
                     </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>

}

const styles = StyleSheet.create ({
    seasontouch: {
        marginVertical: 20,
        backgroundColor: `rgb(100,100,220)`,
        width: 179,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        marginHorizontal: 
    }
})

export default AffanOromolink_2