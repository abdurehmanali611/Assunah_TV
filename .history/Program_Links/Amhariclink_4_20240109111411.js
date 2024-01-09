import React from "react";
import { StyleSheet } from "react-native";
import { Linking, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { ScrollView, View } from "react-native";

const Amhariclink_4 = ({navigation}) => {

    return <ScrollView>
        <View>
            <Text style = {styles.header}>Amharic program schedule 4</Text>
        <View>
            <Text style = {styles.title}>Talk shows</Text>
            <View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.talktouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=4XNiT8PESFA&list=PLZaq281_mc40pDzZ9Np_uXjJMESuzalw0&pp=iAQB')}
                >
                    <Text>Yetndoch mejlis</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.talktouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=38baydWLZnI&list=PLZaq281_mc41QLARTFMWihodczl0Cbyb_&pp=iAQB')}
                >
                    <Text>Mugt</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        <View>
            <Text style = {styles.title}>Entertainment</Text>
            <View>
            <View style = {{alignItems: 'center'}}>
                <TouchableOpacity
                style = {styles.talktouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=f-Gr0LgKwJc&list=PLZaq281_mc43SDN1n_zmY5hs-ljC2a8Wk&pp=iAQB')}
                >
                    <Text>Misku assunah</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        <View>
            <Text style = {styles.title}>Women's Program</Text>
            <View>
            <View style = {{alignItems: 'center'}}>
                <TouchableOpacity
                style = {styles.talktouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=10WiGIfUTPg&list=PLZaq281_mc42RlXmsgFIuM-PlK9pCl5MF&pp=iAQB')}
                >
                    <Text>Reyhan</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        <View>
            <Text style = {styles.title}>Story</Text>
            <View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.talktouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=-dgu9WwTBoE&list=PLZaq281_mc41_dg8EZlPyFI0Z1ocgR8ld&pp=iAQB')}
                >
                    <Text>visit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.talktouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=e1ep8YJJ4O0&list=PLZaq281_mc43MgPsMGkRVV-nqJsLrTAC2&pp=iAQB')}
                >
                    <Text>Qisasun we eber</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        <View>
            <Text style = {styles.title}>Mewlid programs</Text>
            <View>
            <View style = {{alignItems: 'center'}}>
                <TouchableOpacity
                style = {styles.talktouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Au9iuKSjc14&list=PLZaq281_mc41vIniu-PsVFhxcG4Mfqoil&pp=iAQB')}
                >
                    <Text>Mewlid</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        <View>
            <Text style = {styles.title}>stage works</Text>
            <View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.talktouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=BIIRaUy_jOU&list=PLZaq281_mc40uziIr98OI2G92__gRXgUQ&pp=iAQB')}
                >
                    <Text>qesem</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.talktouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=XXNh8XWKqMs&list=PLZaq281_mc40fW2OelvU7B9ihAf6C_sYU&pp=iAQB')}
                >
                    <Text>Hilal</Text>
                </TouchableOpacity>
            </View>
            <View style = {{alignItems: 'center'}}>
                <TouchableOpacity
                style = {styles.talktouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=zHipNPLwxss&list=PLZaq281_mc41Z5ivnGWsFQWIlXsvH0e0V&pp=iAQB')}
                >
                    <Text>degu zemen</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        <View>
            <Text style = {styles.title}>Event and holiday</Text>
            <View style = {{alignItems: 'center'}}>
                <TouchableOpacity
                style = {styles.talktouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=yZjAmi3Y7cM&list=PLZaq281_mc42M30B4z1GPr7c-vp85Uk6q&pp=iAQB')}
                >
                    <Text>Khutbah</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <Text style = {{marginVertical: 20, textAlign: 'center', fontSize: 20}}>shorts</Text>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.talktouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=PSJTtzsZ7-U&list=PLZaq281_mc40fu5ruZWF3qfz-6U-UQB3y&pp=iAQB')}
                >
                    <Text>religious advice</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.talktouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=neWrrBWyzBA&list=PLZaq281_mc41_gJuaWGS98JtmVZtzVljn&pp=iAQB')}
                >
                    <Text>seydin beb'er</Text>
                </TouchableOpacity>
            </View>
            <View style = {{alignItems: 'center'}}>
                <TouchableOpacity
                style = {styles.talktouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=nWHTg6rElDY&list=PLZaq281_mc40_407DgMU83Pcgv-je2PBw&pp=iAQB')}
                >
                    <Text>Motion graphics</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.nexttouch}
                onPress={() => navigation.navigate('Amhariclink3')}
                >
                    <Text>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.nexttouch}
                onPress={() => navigation.navigate('Amhariclink5')}
                >
                    <Text>Next</Text>
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
    talktouch: {
        marginVertical: 20,
        width: 150,
        height: 80,
        backgroundColor: randomRGB(),
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomStartRadius: 20,
        borderTopStartRadius: 20
    },
    nexttouch: {
        marginVertical: 20,
        backgroundColor: randomRGB(),
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginHorizontal: 20
    }
})

export default Amhariclink_4