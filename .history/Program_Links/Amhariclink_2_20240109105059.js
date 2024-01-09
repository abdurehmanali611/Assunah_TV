import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Linking, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const Amhariclink_2 = ({navigation}) => {

    return <ScrollView>
        <Text style = {styles.header}>Second Page of Amharic schedules</Text>
        <View>
            <Text style = {styles.title}>Timely Education</Text>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=6ezBQXrgTSc&list=PLZaq281_mc41hX_Lqv_w5mk0eKAYUbvkD&pp=iAQB')}
                >
                    <Text>tdar and its rule</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=rGka9FznxjA&list=PLZaq281_mc40RX18K38FYnKCN10Yp3hIi&pp=iAQB')}
                >
                    <Text>Islam and newers</Text>
                </TouchableOpacity>
            </View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=6aFVCYf3ruU&list=PLZaq281_mc41DteCx6LqUX-OFfFLdVYIC&pp=iAQB')}
                >
                    <Text>You know?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=F9oi2u-YUv0&list=PLZaq281_mc404JZ7KMAyEZ4TN1D3AkdIP&pp=iAQB')}
                >
                    <Text>Remember</Text>
                </TouchableOpacity>
            </View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=_j1iuK27I2Q&list=PLZaq281_mc40L9LlV5TKmjr_1B745I7Ri&pp=iAQB')}
                >
                    <Text>Yehair tebta</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=_D6bmYzCxKk&list=PLZaq281_mc42B2DLe7ycCEk6S9miXUwiy&pp=iAQB')}
                >
                    <Text>Mejalisul huda</Text>
                </TouchableOpacity>
            </View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=IqM5inj3kz4&list=PLZaq281_mc42wsqqlKc3cOOLKkHALSAw0&pp=iAQB')}
                >
                    <Text>Yesehaboch tarik</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Qz51xC1slYQ&list=PLZaq281_mc43_iy61RtqNoC9T5053BWi9&pp=iAQB')}
                >
                    <Text>Melkam snemgbar</Text>
                </TouchableOpacity>
            </View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=bEX9RBwk3Ew&list=PLZaq281_mc41eYZmbQDAyCyok2Idg_aGP&pp=iAQB')}
                >
                    <Text>Fi beyti resulillah</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=D3H7DLEHa4w&list=PLZaq281_mc42TxyXhb5fCRx2RVsn54SCu&pp=iAQB')}
                >
                    <Text>Yehabesha ulemoch</Text>
                </TouchableOpacity>
            </View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=wDMQbTsaKug&list=PLZaq281_mc40suSw3iBcux0H00B87G8WD&pp=iAQB')}
                >
                    <Text>addinu nesiha</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=gLtlX3ikOAE&list=PLZaq281_mc41J7x8JAKeBGX0QqWpvKwvj&pp=iAQB')}
                >
                    <Text>arabic language</Text>
                </TouchableOpacity>
            </View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=-T74bzA1r00&list=PLZaq281_mc42FjAeODrbSCyDaC5JasBpb&pp=iAQB')}
                >
                    <Text>Iqrae</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=xoAArraOHiI&list=PLZaq281_mc40mmS6QRK1mStXhqvA9c2xz&pp=iAQB')}
                >
                    <Text>Muslim's morality</Text>
                </TouchableOpacity>
            </View>
            <View style = {{alignItems: 'center'}}>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=6gyzylYTcbM&list=PLZaq281_mc427QUYpPOWooTDLmb3qCVg1&pp=iAQB')}
                >
                    <Text>Al mehasin</Text>
                </TouchableOpacity>
            </View>
                <Text style = {{marginVertical: 20,textAlign: 'center',fontSize: 22}}>Video Clips</Text>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=4x2OaKP0lzA&list=PLZaq281_mc41z7LDeXhqSWDlwCOyb4U_g&pp=iAQB')}
                >
                    <Text>Menzuma clip</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.timetouch}
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=kaMpMdEH_m8&list=PLZaq281_mc439tVdg4ldduDAfZxEmG6Ps&pp=iAQB')}
                >
                    <Text>Assunah liyu</Text>
                </TouchableOpacity>
            </View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Amhariclink')}
                style = {styles.nexttouch}
                >
                    <Text>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('Amhariclink3')}
                style = {styles.nexttouch}
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
    timetouch: {
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

export default Amhariclink_2