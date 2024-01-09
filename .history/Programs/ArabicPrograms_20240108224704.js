import { Link } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView } from "react-native";

const ArabicPrograms = () => {

    return(
        <View style = {{backgroundColor: randomRGB(),flex: 1,justifyContent: 'flex-start'}}>
            <View>
            <View style = {{alignItems: 'center', paddingTop: '40%', marginVertical: 20}}>
            <Text style = {{fontSize: 27,fontWeight: '600', textDecorationLine: 'underline'}}>
               Arabic language programs
            </Text>
            </View>
            <View style = {{alignItems: 'center'}}>
            <ScrollView>
                <Link 
                style = {{backgroundColor: randomRGB(),marginHorizontal: 20,textDecorationLine: 'underline', width: 300, marginVertical: 10}}
                to={'/Arabiclink'}>
                <Text style = {{fontSize: 20}}>Education or Ders</Text>
                </Link>
                <Link 
                style = {{backgroundColor: randomRGB(),marginHorizontal: 20,textDecorationLine: 'underline', width: 300, marginVertical: 10, height: 70}}
                to={'/Arabiclink'}>
                <Text style = {{fontSize: 20}}>Timely Education</Text>
                </Link>
            </ScrollView>
            </View>
        </View>
        </View>
    )
}

const randomRGB = () => {

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
}

export default ArabicPrograms