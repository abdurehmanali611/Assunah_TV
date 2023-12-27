import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";

const Arabiclink = () => {

    return <ScrollView>
        <View>
            <Text>Arabic program schedules</Text>
            <View>
                <Text>Education</Text>
                <View>
                    <TouchableOpacity>
                        <Text>nefaisul muhadera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>idahul meram</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>al arbeune </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>idahul meram</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text>Timely Educations</Text>
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