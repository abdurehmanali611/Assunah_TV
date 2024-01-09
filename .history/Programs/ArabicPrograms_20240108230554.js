import { Link } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, ScrollView } from "react-native";

const ArabicPrograms = () => {

    return(
        <View style = {{backgroundColor: randomRGB(), flex: 1}}>
            <View>
            <View>
            <Text style = {styles.header}>
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
    },
    header: {
        fontSize: 27,
        fontWeight: 'bold', 
        textAlign: 'center',
        marginTop: '50%', 
        marginBottom: 40,
        backgroundColor: randomRGB(), 
        width: 355, 
        marginHorizontal: 15, 
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 130
    }
})

export default ArabicPrograms