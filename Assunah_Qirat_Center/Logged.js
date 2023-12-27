import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Logged = ({navigation}) => {

    return <View style = {{alignItems: 'center',marginTop: '50%'}}>
        <Text style = {{fontSize: 28}}>You are successfully logged in</Text>
        <Text style = {{fontSize: 25}}>Have a good time</Text>
        <TouchableOpacity
        style = {{marginVertical: 30, backgroundColor: `rgb(100,200,100)`, width: 150, height: 50, borderRadius: 20}}
         onPress={() => navigation.navigate('Home')}>
            <Text style = {{textAlign: 'center', paddingTop: 10}}>Ok</Text>
        </TouchableOpacity>
    </View>

}

export default Logged