import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";

const AffanOromolink = () => {

    return <ScrollView>
        <View>
            <Text style = {{fontSize: 19,textAlign: 'center',marginVertical: 20}}>Affan Oromo Program schedules</Text>
            <View>
                <Text style = {{fontSize: 19,textAlign: 'center',marginVertical: 20}}>Education</Text>
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
            <V
        </View>
    </ScrollView>

}

const styles = StyleSheet.create ({
    oromotouch: {
        marginVertical: 20,
        backgroundColor: `rgb(150,100,20)`,
        width: 175,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 20,
        borderTopStartRadius: 20,
        marginHorizontal: 8
    }
})

export default AffanOromolink