import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";

const AffanOromolink = ({navigation}) => {

    return <ScrollView showsVerticalScrollIndicator = {false}>
        <View style = {{backgroundColor: randomRGB()}}>
            <Text style = {styles.headerup}>Affan Oromo Program schedules</Text>
            <View>
                <Text style = {styles.header}>Education</Text>
                <View style = {styles.grouptouch}>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
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
                        <Text>Naffa isul-Muhaadaraat</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=PDBnHhpd1C4&list=PLZaq281_mc437T8IQMPK3N5XmJqpjqaoz&pp=iAQB')}
                    >
                        <Text>Riyaadus-saalihin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=G7NNcMXcv-Q&list=PLZaq281_mc40iQi4SvJFDsXxwhurOQNhA&pp=iAQB')}
                    >
                        <Text>jaami'ul keayraat</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=RT-0S2CbEwA&list=PLZaq281_mc42lhMAR9bz9uEM-A0ELo3AD&pp=iAQB')}
                    >
                        <Text>Al-burudah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=8JYevrK_9pg&list=PLZaq281_mc41XvUKqK8kAqPu1b5FZrs7q&pp=iAQB')}
                    >
                        <Text>As-siraax al-mustaqiim</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=6QGMWgb9Teg&list=PLZaq281_mc42Q6QXPe0mKl50uQV3yktTx&pp=iAQB')}
                    >
                        <Text>sirah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=c7trXAz0fhw&list=PLZaq281_mc42Na74j4YYgVAY7cvZjAZ0D&pp=iAQB')}
                    >
                        <Text>izhaar al-ifaadaat</Text>
                    </TouchableOpacity>
                </View>
                </View>
                <View style = {styles.grouptouch}>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=WrlbtqgumI8&list=PLZaq281_mc42r1tlgwlx-4VGSfPV5PFrI&pp=iAQB')}
                    >
                        <Text>Karaamaat al-awliyaa'a</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=1ty5hYIebso&list=PLZaq281_mc40N9_TDhdP7hjYngLmgOhxg&pp=iAQB')}
                    >
                        <Text>aqiidatulmuslimiin</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=jyeepTWsToY&list=PLZaq281_mc42gEWPZqpl8mfJ1SzvSkUw_&pp=iAQB')}
                    >
                        <Text>Naffa isul-Muhaadaraat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=nlyyCBgoxwA&list=PLZaq281_mc43ZD7yMK6YNqMvwgdwgK5_6&pp=iAQB')}
                    >
                        <Text>aqiidatulmurshidah</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=eAXER0GrPgw&list=PLZaq281_mc41jw0oDuUweLD5VtcOM0nrT&pp=iAQB')}
                    >
                        <Text>arba'iin-annewewwiyyah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=-LMsOLeGu74&list=PLZaq281_mc40cj3DqKoU76CkYd4A49kvu&pp=iAQB')}
                    >
                        <Text>abu-shujaa'i</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=YmeDSVLLgSI&list=PLZaq281_mc412t980bvzztKO_5adohl2Q&pp=iAQB')}
                    >
                        <Text>Durratul-bahiyyah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=FOyFtQg4TE8&list=PLZaq281_mc42MyRSRA6vFJMkHM79HmOlJ&pp=iAQB')}
                    >
                        <Text>buluughul-maraam</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View>
                <Text style = {styles.header}>Timely Education or Ders</Text>
                <View style = {styles.group2touch}>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=SWyVEhmfW9Y&list=PLZaq281_mc43BJOZOLD4Eci8MHg7YkpD4&pp=iAQB')}
                    >
                        <Text>Al-Adilah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=KZLd1hruHHg&list=PLZaq281_mc437tKLTOc6JhbFoUJTdC9Tb&pp=iAQB')}
                    >
                        <Text>majaalisul-hudaa 1442</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Ccrul7E-dqw&list=PLZaq281_mc43h9bAEJTkRx4ZCe5myC6-Y&pp=iAQB')}
                    >
                        <Text>bektuu-laataa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=3NiIQsDhsRY&list=PLZaq281_mc40DhO-g6-96RA-tX5cNlOec&pp=iAQB')}
                    >
                        <Text>majaalisul-hudaa</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=jLV6Ax5dLso&list=PLZaq281_mc40hzFAV78436FleQ9RaaQVB&pp=iAQB')}
                    >
                        <Text>Hayoota suufiyya</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=m5tMhmQ4tag&list=PLZaq281_mc4310MTpSt1CW-TyU_MJoXvJ&pp=iAQB')}
                    >
                        <Text>SEENA NEBIYOOTA</Text>
                    </TouchableOpacity>
                </View>
                </View>
                <View style = {styles.group2touch}>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=JO3kYjF_ziM&list=PLZaq281_mc43aewfZUjIb1om8PKJ9canD&pp=iAQB')}
                    >
                        <Text>CAAYAA DINISLAAM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=5lGQ1aFNzE4&list=PLZaq281_mc40sClIAPntSUcYt7ro7ijqf&pp=iAQB')}
                    >
                        <Text>SEENAA ERGANA RABII</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=XKlN-KNW2C0&list=PLZaq281_mc402ZSwN7-vXHZYZsQjZPZSq&pp=iAQB')}
                    >
                        <Text>SIINAWAAN GARA GARAA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=KHI23z-DyGE&list=PLZaq281_mc40ft2XG3q0a7EaEQ-UeH4BV&pp=iAQB')}
                    >
                        <Text>SEENA TAABIOTAA</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{alignItems: 'center'}}>
                    <TouchableOpacity
                    style = {styles.oromotouch}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=oaV4VJJHL1E&list=PLZaq281_mc40Rkz9FJ5MvKUf1UVL-HJAv&pp=iAQB')}
                    >
                        <Text>AMALA GARUMA</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity
                    style = {styles.touch}
                    onPress={() => navigation.navigate('Oromo')}
                    >
                        <Text>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.touch}
                    onPress={() => navigation.navigate('Oromolink2')}
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
    oromotouch: {
        marginVertical: 20,
        backgroundColor: randomRGB(),
        width: 165,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 20,
        borderTopStartRadius: 20,
        marginHorizontal: 10
    },
    touch: {
        marginVertical: 20,
        width: 160,
        height: 70,
        backgroundColor: randomRGB(),
        borderRadius: 20,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    grouptouch: {
        backgroundColor: randomRGB(),
        width: 365,
        marginHorizontal: 10,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        height: 500,
        marginVertical: 10
    },
    group2touch: {
        backgroundColor: randomRGB(),
        width: 365,
        marginHorizontal: 11,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        height: 400,
        marginVertical: 10
    },
    header: {
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
    headerup: {
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
    }
})

export default AffanOromolink