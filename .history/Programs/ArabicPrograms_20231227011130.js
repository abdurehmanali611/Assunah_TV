import { Link } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView } from "react-native";

const Arabic = () => {

    return(
        <View style = {{backgroundColor: 'silver',flex: 1,justifyContent: 'flex-start'}}>
            <View>
            <View style = {{alignItems: 'center', paddingTop: '40%', marginVertical: 20}}>
            <Text style = {{fontSize: 27,fontWeight: '600', textDecorationLine: 'underline'}}>
               Arabic language programs
            </Text>
            </View>
            <View style = {{alignItems: 'center'}}>
            <ScrollView horizontal>
                <Link 
                style = {{backgroundColor: `rgb(100,150,200)`,marginHorizontal: 20,textDecorationLine: 'underline'}}
                to={'/Arabiclink'}>
                <Text style = {{fontSize: 20}}>Education or Ders</Text>
                </Link>
                <Link 
                style = {{backgroundColor: `rgb(120,200,150)`,marginHorizontal: 20,textDecorationLine: 'underline'}}
                to={'/Arabiclink'}>
                <Text style = {{fontSize: 20}}>Timely Education</Text>
                </Link>
            </ScrollView>
            </View>
        </View>
        </View>
    )
}

export default Qiratcenter