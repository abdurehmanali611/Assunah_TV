import { Link } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, ScrollView } from "react-native";

const ArabicPrograms = () => {

    return(
        <View style = {{backgroundColor: randomRGB(),flex: 1,justifyContent: 'flex-start'}}>
            <View>
            <View>
            <Text style = {{fontSize: 27,fontWeight: '600', textAlign: 'center', marginTop: 60}}>
               Arabic language programs
            </Text>
            </View>
            <View style = {{alignItems: 'center'}}>
            <ScrollView>
                <Link 
                style = {styles.link}
                to={'/Arabiclink'}>
                <Text style = {{fontSize: 20}}>Education or Ders</Text>
                </Link>
                <Link 
                style = {styles.link}
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

const styles = StyleSheet.create ({
    link: {
        backgroundColor: randomRGB(),
        marginHorizontal: 20, 
        width: 300, 
        marginVertical: 10,
        height: 70, 
        textAlignVertical: 'center', 
        textAlign: 'center', 
        borderTopRightRadius: 30, 
        borderBottomLeftRadius: 30
    }
})

export default ArabicPrograms