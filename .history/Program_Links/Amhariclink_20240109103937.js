import React from "react";
import { Text } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Linking, View } from "react-native";

const Amhariclink = ({navigation}) => {

    const openURL = () => {
        Linking.openURL('https://www.youtube.com/watch?v=zeUl0oNxLjg&list=PLZaq281_mc41uzK0SZ9pTiOiPAW6UN5Mq&pp=iAQB')
    }

    return <ScrollView showsVerticalScrollIndicator = {false}>
        <View style = {{backgroundColor: randomRGB(), paddingVertical: 10}}>
        <Text style = {styles.header}>Amharic Program schedules</Text>
        <View>
        <Text style = {styles.title}>
            Neshida and Menzuma
        </Text>
        <View style = {styles.grouptouch}>
        <View style = {{display: 'flex',flexDirection: 'row'}}>
         <TouchableOpacity 
          style = {styles.neshidatouch}
         onPress={openURL}
         >
              <Text>Rabii Welcome</Text>
         </TouchableOpacity>
         <TouchableOpacity 
          style = {styles.neshidatouch}
         onPress={() => Linking.openURL('https://www.youtube.com/watch?v=3BSDnRuaJbw&list=PLZaq281_mc42KQ24fm1vbkh4Cj5Hfcz58&pp=iAQB')}
         >
              <Text>MEDH</Text>
         </TouchableOpacity>
         </View>
         <View style = {{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=l1cU4VBga4E&list=PLZaq281_mc41U-4Qzi3PdGO3hzjii5ZiI&pp=iAQB')}
            style = {styles.neshidatouch}
            >
                <Text>Assunah Menzuma</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=VF47xQa1Emo&list=PLZaq281_mc41-dDADviK4r3I-s5Y2Mfoh&pp=iAQB')}
            style = {styles.neshidatouch}
            >
                <Text>Menzuma</Text>
            </TouchableOpacity>
         </View>
         <View style = {{alignItems: 'center'}}>
            <TouchableOpacity
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=4WmGh34quo8&list=PLZaq281_mc422KFWtnk9xUF_oG2qwHpyC&pp=iAQB')}
            style = {styles.neshidatouch}
            >
                <Text>Anasheed</Text>
            </TouchableOpacity>
         </View>
         </View>
        </View>
        <View>
            <Text style = {styles.title}>Education Or Ders</Text>
            <View style = {styles.grouptouch}>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=PaMcYq2LLM8&list=PLZaq281_mc40bcuQzV_2c5lmzbXOWJfBC&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>Elemel hal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=jDO4zNxKfyo&list=PLZaq281_mc42ZYY6SubsB4S9B-uu9Qh8S&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>Arbeun Annewewiy</Text>
                </TouchableOpacity>
            </View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=4MLP7nYd8yI&list=PLZaq281_mc43peG78QX96QX_g02RBHHGA&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>Nefaisul Muhadera</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=aFVwepclMtg&list=PLZaq281_mc434sGE0DR1O9adwyZs-CESX&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>Ateriqul Mehbub</Text>
                </TouchableOpacity>
            </View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=DLuqs5NMJeE&list=PLZaq281_mc41wK0IFNgnvlITj_KQv9Nhr&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>Aqidetul awam</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=aYgRPtuldNE&list=PLZaq281_mc40rrxF-0aGZZGZ7b_waGMkd&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>Riyadu Assalihin</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style = {styles.grouptouch}>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Mh_yR-Gekwk&list=PLZaq281_mc40EMMxgvHlaTmCp3goMZFgK&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>Abu Shujai</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=P5PL3FPoKGU&list=PLZaq281_mc43o9czSQvHZ0-wOmkV7oD82&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>shemail annebiy</Text>
                </TouchableOpacity>
            </View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=k0R0hYchQpw&list=PLZaq281_mc43jFKhk0un974sd6IMcXxAM&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>Almewlidul jamii</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=5RlsOtLTSGY&list=PLZaq281_mc42dNPt7NPS-xioufLf9SMVy&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>Bulughul meram</Text>
                </TouchableOpacity>
            </View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=8i8U1ColPnQ&list=PLZaq281_mc431WS8dFnP2vAsYyUAVZjXv&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>Aqidetu Attahawiyah</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=hGF-72a-zsI&list=PLZaq281_mc43ss27mUN00vO6jhKDRAHex&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>Izharul Ifadat</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=pPj-pAL-jLU&list=PLZaq281_mc43jUvrnMaH4xuTgJPH4_ZIs&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>Al Muntekheb</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=kW4GwZE_Elo&list=PLZaq281_mc43bdmh2sOEk2y8GbskHRrhv&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>Aqidetu Annesefiya</Text>
                </TouchableOpacity>
            </View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=EUaROEBF97o&list=PLZaq281_mc41LPzmrpR7-osqLY006G3QC&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>Alwesiyah</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=UJbzDWwTcvM&list=PLZaq281_mc40ThwVQcrEGkkzx2XhJJyi5&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>sahih albukhariy</Text>
                </TouchableOpacity>
            </View>
            <View style = {{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=lNUsJoHg7EE&list=PLZaq281_mc43qHPr62aBWcqlbBA5XdhiV&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>Riyadu assalihin</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=HjNU9XbRW_c&list=PLZaq281_mc41XjdH1DiZrcnU2fOam2ST6&pp=iAQB')}
                style = {styles.derstouch}
                >
                    <Text>Siretu Annebiy</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        <View style = {{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Amharic')} 
            style = {styles.nexttouch}
            >
                <Text>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('Amhariclink2')} 
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

const styles = StyleSheet.create({
    neshidatouch: {
       marginVertical: 20,
       backgroundColor: randomRGB(),
       alignItems: 'center',
       width: 178,
       height: 50,
       justifyContent: 'center',
       borderBottomEndRadius: 30,
       borderTopLeftRadius: 30,
       marginHorizontal: 8
    },
    derstouch: {
       marginVertical: 20,
       alignItems: 'center',
       backgroundColor: randomRGB(),
       width: 178,
       height: 50,
       justifyContent: 'center',
       borderTopRightRadius: 30,
       borderBottomLeftRadius: 30,
       marginHorizontal: 8
    },
    nexttouch: {
        marginVertical: 20,
        alignItems: 'center',
        backgroundColor: '#555555',
        width: 150,
        height: 50,
        justifyContent: 'center',
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
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
})

export default Amhariclink