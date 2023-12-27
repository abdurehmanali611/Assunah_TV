import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Link } from "@react-navigation/native";

const Qiratcenter = () => {

    return(
        <View style = {{backgroundColor: 'silver',flex: 1,justifyContent: 'flex-start'}}>
            <View>
            <View style = {{alignItems: 'center', paddingTop: '40%', marginVertical: 20}}>
            <Text style = {{fontSize: 27,fontWeight: '600', textDecorationLine: 'underline'}}>
               Afar language programs
            </Text>
            </View>
            <View style = {{alignItems: 'center'}}>
            <ScrollView horizontal>
                <Link 
                style = {{backgroundColor: '#F9B572',marginHorizontal: 20, textDecorationLine: 'underline'}}
                to={'/Afarlink'}>
                <Text style = {{fontSize: 20}}>Education or Ders</Text>
                </Link>
                <Link 
                style = {{backgroundColor: '#64CCC5',marginHorizontal: 20, textDecorationLine: 'underline'}}
                to={'/Afarlink'}>
                <Text style = {{fontSize: 20}}>Timely Education</Text>
                </Link>
            </ScrollView>
            </View>
        </View>
        </View>
    )
}

export default Qiratcenter