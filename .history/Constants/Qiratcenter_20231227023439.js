import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RadioButton } from 'react-native-paper';

const Qiratcenter = ({navigation}) => {

    const [yesorno, setans] = useState('')

    const submitted = () => {

        if(yesorno === 'yes'){
            navigation.navigate('Login')
        }else
    }

    return(
        <View style = {{marginVertical: 30, alignItems: 'center'}}>
            <Text>
                This is Assunah Recitation center Do you want to register
            </Text>
            <View style = {{marginVertical: 30, alignItems: 'center'}}>
                <Text>Do you want to register to the Assunah Recitation Center</Text>
            </View>
            <View>
                <RadioButton.Group
                value={yesorno}
                onValueChange={(newwhether) => setans(newwhether)}
                >
                    <RadioButton.Item
                    label="Yes"
                    value="yes"
                    color="green"
                    />
                    <RadioButton.Item
                    label="No"
                    value="no"
                    color="red"
                    />
                </RadioButton.Group>
            </View>
            <View>
                <TouchableOpacity 
                style = {{alignItems: 'center', backgroundColor: `rgb(100,50,50)`,width: 150, height: 50, marginHorizontal: 120, marginVertical: 30, justifyContent: 'center',borderRadius: 30}}
                onPress={submitted}
                >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Qiratcenter