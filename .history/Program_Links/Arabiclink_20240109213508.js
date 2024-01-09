import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";

const Arabiclink = ({navigation}) => {

    return <ScrollView>
        <View>
            <Text style = {styles.header}>Arabic program schedules</Text>
            <View>
                <Text style = {styles.title}>Education</Text>
                <View style = {styles.grouptouch}>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=wwrE4c35KCw&list=PLZaq281_mc41jHGAS6xVizSDBtxUEex4w&pp=iAQB')}
                    style = {styles.arabictouch}
                    >
                        <Text>nefaisul muhadera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=B_a8F6-2AlI&list=PLZaq281_mc40Sw8Axrq3sesMrpl56hku8&pp=iAQB')}
                    style = {styles.arabictouch}
                    >
                        <Text>idahul meram</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=GRt5Um3qquw&list=PLZaq281_mc42bRinnXHXSk_bedyyT9PK3&pp=iAQB')}
                    style = {styles.arabictouch}
                    >
                        <Text>al arbeune annewewiyah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=FXLMJof53DY&list=PLZaq281_mc43y3T7NP9Q2dZYDFX58Yf-v&pp=iAQB')}
                    style = {styles.arabictouch}
                    >
                        <Text>al burhanul muayed</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{alignItems: 'center'}}>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=YJot9l6jVXo&list=PLZaq281_mc41dQzAuywvX016Tb7Vmct2k&pp=iAQB')}
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
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=1FA6FvTgz3A&list=PLZaq281_mc42sotOmsQvvGi46o7zL-WkX&pp=iAQB')}
                    style = {styles.arabictouch}
                    >
                        <Text>nefehatul imaniyah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=EEj6cACcXCU&list=PLZaq281_mc40kkMJb5N6C5Ie-rccAqn83&pp=iAQB')}
                    style = {styles.arabictouch}
                    >
                        <Text>Durus we muhaderat</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{alignItems: 'center'}}>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=LcLmztuP1bM&list=PLZaq281_mc425D55WMKcv7PnXeKzDfSMY&pp=iAQB')}
                    style = {styles.arabictouch}
                    >
                        <Text>sheikh walid assemamiah</Text>
                    </TouchableOpacity> 
                </View>
            </View>
            <View style = {{display: 'flex'}}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Arabic')}
                    style = {styles.arabicnext}
                    >
                        <Text>Previous</Text>
                    </TouchableOpacity> 
                </View>
        </View>
    </ScrollView>

}

const randomRGB = () => {

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create ({ 
    arabictouch: {
        marginVertical: 20,
        backgroundColor: randomRGB(),
        width: 175,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        marginHorizontal: 8
    },
    arabicnext: {
        marginVertical: 20,
        backgroundColor: randomRGB(),
        width: 175,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        marginHorizontal: 15
    }
})
export default Arabiclink