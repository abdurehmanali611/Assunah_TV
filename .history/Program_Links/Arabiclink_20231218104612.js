import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";

const Arabiclink = () => {

    return <ScrollView>
        <View>
            <Text style = {{fontSize: 19, textAlign: 'center', marginVertical: 20}}>Arabic program schedules</Text>
            <View>
                <Text style = {{fontSize: 19, textAlign: 'center', marginVertical: 20}}>Education</Text>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    style = {styles.arabictouch}
                    >
                        <Text>nefaisul muhadera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.arabictouch}
                    >
                        <Text>idahul meram</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    style = {styles.arabictouch}
                    >
                        <Text>al arbeune annewewiyah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.arabictouch}
                    >
                        <Text>al burhanul muayed</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                    style = {styles.arabictouch}
                    >
                        <Text>nuzhatu attalibin</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style = {{fontSize: 19, textAlign: 'center', marginVertical: 20}}>Timely Educations</Text>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    style = {styles.arabictouch}
                    >
                        <Text>nefehatul imaniyah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.arabictouch}
                    >
                        <Text>Durus we muhaderat</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                    style = {styles.arabictouch}
                    >
                        <Text>sheikh walid assemamiah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.arabictouch}
                    >
                        <Text>Durus we muhaderat</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>

}

const styles = StyleSheet.create ({ 
    arabictouch: {
        marginVertical: 20,
        backgroundColor: `rgb(120,180,150)`,
        width: 175,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        marginHorizontal: 8
    }
})
export default Arabiclink