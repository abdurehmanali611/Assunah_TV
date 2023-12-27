import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";

const Arabiclink = () => {

    return <ScrollView>
        <View>
            <Text style = {{fontSize: 19, textAlign: 'center', marginVertical: 20}}>Arabic program schedules</Text>
            <View>
                <Text style = {{fontSize: 19, textAlign: 'center', marginVertical: 20}}>Education</Text>
                <View>
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
                <View>
                    <TouchableOpacity
                    style = {styles.arabictouch}
                    >
                        <Text>al arbeune annewewiyah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>al burhanul muayed</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>nuzhatu attalibin</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style = {{fontSize: 19, textAlign: 'center', marginVertical: 20}}>Timely Educations</Text>
                <View>
                    <TouchableOpacity>
                        <Text>nefehatul imaniyah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Durus we muhaderat</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>sheikh walid assemamiah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Durus we muhaderat</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>

}

export default Arabiclink