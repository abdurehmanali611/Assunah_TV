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
                <View style = {{display: 'flex', flexDirection: 'row'}}>
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
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                     <TouchableOpacity
                     style = {styles.seasontouch}
                     onPress={() => Linking.openURL('https://www.youtube.com/watch?v=2Kzc9J1Vzj0&list=PLZaq281_mc413B5zTOTqItqii-_MhZgp2&pp=iAQB')}
                     >
                        <Text>Qophii addaa</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                     style = {styles.seasontouch}
                     onPress={() => Linking.openURL('https://www.youtube.com/watch?v=x9PVoxC-uyw&list=PLZaq281_mc43zXUr7e0WDtw0jkxe7PMrt&pp=iAQB')}
                     >
                        <Text>Remedan 2023 oromifa</Text>
                     </TouchableOpacity>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                     <TouchableOpacity
                     style = {styles.seasontouch}
                     onPress={() => Linking.openURL('https://www.youtube.com/watch?v=jNuQGte7IHU&list=PLZaq281_mc423tBq1rqGx_ku67GH53KkP&pp=iAQB')}
                     >
                        <Text>Arafaa 2022</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                     style = {styles.seasontouch}
                     onPress={() => Linking.openURL('https://www.youtube.com/watch?v=m2XTZAh96R4&list=PLZaq281_mc43A0ZA77fRur7RzzZdf_wEM&pp=iAQB')}
                     >
                        <Text>Boohartii Ramadaanaa 1443</Text>
                     </TouchableOpacity>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                     <TouchableOpacity
                     style = {styles.seasontouch}
                     onPress={() => Linking.openURL('https://www.youtube.com/watch?v=w774mcw7IIY&list=PLZaq281_mc42it_yaJsndZTqgNC_b1mD9&pp=iAQB')}
                     >
                        <Text>oromiffa EID 1442</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                     style = {styles.seasontouch}
                     onPress={() => Linking.openURL('https://www.youtube.com/watch?v=qlilOl6D2yY&list=PLZaq281_mc41CV0U1h8Wd0uiJsWRnwsKR&pp=iAQB')}
                     >
                        <Text>Darsiiwwan Ramadaanaa</Text>
                     </TouchableOpacity>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                     <TouchableOpacity
                     style = {styles.seasontouch}
                     onPress={() => Linking.openURL('https://www.youtube.com/watch?v=pyEBaljlIMQ&list=PLZaq281_mc42OxdBiN5k6v5_ieSfPPLW5&pp=iAQB')}
                     >
                        <Text>Taatiiwwan Ramadaanaa</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                     style = {styles.seasontouch}
                     onPress={() => Linking.openURL('https://www.youtube.com/watch?v=0prVpslPWRY&list=PLZaq281_mc41Z5-FFovVbKAdS6WPPaUge&pp=iAQB')}
                     >
                        <Text>Bohartii halkan Ramadaanaa</Text>
                     </TouchableOpacity>
                </View>
                <View style = {{alignItems: 'center'}}>
                     <TouchableOpacity
                     style = {styles.seasontouch}
                     onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Oxru4nqPMVg&list=PLZaq281_mc43cbUBEj22-crK1WqDSBd_c&pp=iAQB')}
                     >
                        <Text>Israa'aa fi mi'raaja</Text>
                     </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style = {{fontSize: 18, textAlign: 'center', marginVertical: 20}}>Women's Program</Text>
                <View style = {{alignItems: 'center'}}>
                     <TouchableOpacity
                     style = {styles.seasontouch}
                     onPress={() => Linking.openURL('https://www.youtube.com/watch?v=U7mReWDj0Y4&list=PLZaq281_mc41-VAtWGdenRno53-xrRTEX&pp=iAQB')}
                     >
                        <Text>Xeybaa</Text>
                     </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style = {{fontSize: 18, textAlign: 'center', marginVertical: 20}}>Mewlid Program</Text>
                <View style = {{alignItems: 'center'}}>
                     <TouchableOpacity
                     style = {styles.seasontouch}
                     onPress={() => Linking.openURL('https://www.youtube.com/watch?v=cj25t80UjYo&list=PLZaq281_mc41ZmqMAfk5R1rWj7qUcg6PZ&pp=iAQB')}
                     >
                        <Text>Qophii addaa kan ayaana mowlidaa</Text>
                     </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style = {{fontSize: 18, textAlign: 'center', marginVertical: 20}}>Event and holiday</Text>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                     <TouchableOpacity
                     style = {styles.seasontouch}
                     onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Fn7xnSQmpdw&list=PLZaq281_mc42rZVq7mTLb0UchSPgydtEH&pp=iAQB')}
                     >
                        <Text>Darsii Mowlidaa</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                     style = {styles.seasontouch}
                     onPress={() => Linking.openURL('https://www.youtube.com/watch?v=JGYiuu8bTdM&list=PLZaq281_mc413h2bCzuOHWEx7ZFNpG-8Q&pp=iAQB')}
                     >
                        <Text>Darsii Mowlidaa</Text>
                     </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style = {{fontSize: 18, textAlign: 'center', marginVertical: 20}}>Quran and Praying</Text>
                <View style = {{alignItems: 'center'}}>
                     <TouchableOpacity
                     style = {styles.seasontouch}
                     onPress={() => Linking.openURL('https://www.youtube.com/watch?v=t8VMlaIWrpI&list=PLZaq281_mc42gqCviXm8-trxCH1M8hIIi&pp=iAQB')}
                     >
                        <Text>Naamusa Qur'</Text>
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
        width: 175,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        marginHorizontal: 9
    }
})

export default AffanOromolink_2