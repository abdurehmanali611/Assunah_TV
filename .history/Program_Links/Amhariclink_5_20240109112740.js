import React from "react";
import { Linking, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { ScrollView, View } from "react-native";

const Amhariclink_5 = ({navigation}) => {

    return <ScrollView>
        <View>
            <Text style = {styles.header}>Amharic Program Schedule 5</Text>
            <View>
                <Text style = {styles.title}>Quran and praying</Text>
                <View style = {styles.grouptouch}>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=mEDiqGalm1A&list=PLZaq281_mc40fXGha1JqRzrCDijsWtwxc&pp=iAQB')}
                    style = {styles.praytouch}
                    >
                        <Text>Weretillil quran</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=G0kYYDekpoc&list=PLZaq281_mc43U5Z86hqtv0CPVJ7wJN0hQ&pp=iAQB')}
                    style = {styles.praytouch}
                    >
                        <Text>yequran adeboch</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=myYkqWrtpVs&list=PLZaq281_mc414xQ0xMwtLS-LlcARh0EuB&pp=iAQB')}
                    style = {styles.praytouch}
                    >
                        <Text>Tefsir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Vne-XCIpHpE&list=PLZaq281_mc4289CZfTqWrYDY_D3c8nywR&pp=iAQB')}
                    style = {styles.praytouch}
                    >
                        <Text>Assunah quran tilawa</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{alignItems: 'center'}}>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=TQI9zlLJ1Wo&list=PLZaq281_mc41vSwoAFNbImmNOpcc2p3tx&pp=iAQB')}
                    style = {styles.praytouch}
                    >
                        <Text>Yequran adeboch</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View>
                <Text style = {styles.title}>Program slogan's</Text>
                <View style = {styles.grouptouch}>
                <View style = {{alignItems: 'center'}}>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=2lbSwOjUI64&list=PLZaq281_mc42iv3DF7SnwofFdRfjwklz4&pp=iAQB')}
                    style = {styles.praytouch}
                    >
                        <Text>Promotion</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View>
                <Text style = {styles.title}>Health Program</Text>
                <View style = {styles.group2touch}>
                <View style = {{alignItems: 'center'}}>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=xsqNJvgeBxE&list=PLZaq281_mc43Iztlm_JBIRMTg0LNq77pT&pp=iAQB')}
                    style = {styles.praytouch}
                    >
                        <Text>Al Afiya</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View>
                <Text style = {styles.title}>Fetwa</Text>
                <View style = {styles.group2touch}>
                <View style = {{alignItems: 'center'}}>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=A1i-3MDbHPk&list=PLZaq281_mc43brFlo2VpSe-elNXZSV13j&pp=iAQB')}
                    style = {styles.praytouch}
                    >
                        <Text>Teyqu</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View>
                <Text style = {styles.title}>Documentary</Text>
                <View style = {styles.group2touch}>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=R0AknZcNz2s&list=PLZaq281_mc43zXTyK6YaxZuSYUnwcl9nr&pp=iAQB')}
                    style = {styles.praytouch}
                    >
                        <Text>Assunah Documentary</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Y7n7pwHYdpQ&list=PLZaq281_mc41oU13cpBtfnhX-2fvZloiH&pp=iAQB')}
                    style = {styles.praytouch}
                    >
                        <Text>Kedegagoch mahder</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Amhariclink4')}
                    style = {styles.nexttouch}
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
    praytouch: {
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
    },
    title: {
        fontSize: 19,
        marginVertical: 10,
        backgroundColor: randomRGB(),
        width: 350,
        textAlign: 'center',
        alignSelf: 'center',
        height: 70,
        textAlignVertical: 'center',
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        fontWeight: 'bold'
    },
    header: {
        fontSize: 19,
        marginVertical: 10,
        backgroundColor: randomRGB(),
        width: 350,
        textAlign: 'center',
        alignSelf: 'center',
        height: 85,
        textAlignVertical: 'center',
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        fontWeight: 'bold'
    },
    grouptouch: {
        backgroundColor: randomRGB(),
        marginVertical: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        height: 350
    }
})

export default Amhariclink_5