import React, { useState } from "react";
import { TextInput, Alert, ScrollView } from "react-native";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginQirat2 = ({navigation}) => {

    const [parentName, setParentName] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [password, setPassword] = useState('')
    const [Phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const submitted = () => {

        if(parentName === ''|| country === '' || city === ''||
        email === ''|| email.includes('@') === false||
        password <= 6 || Phone < 10 || Phone === ''){
            Alert.alert(
                'Input',
                'Please enter the inputs correctly',
            [
                {text: 'Ok'}
            ]
            )
        }else{
            navigation.navigate('Logged')
        }
    }

    return <ScrollView>
        <Text style = {{textAlign: 'center',fontSize: 22,textDecorationLine: 'underline'}}>Here We Fill Parent Informations</Text>
        <View style = {{marginVertical: 10}}>
            <Text>Parent Full Name</Text>
            <TextInput 
            value={parentName}
            onChangeText={(newparent) => setParentName(newparent)}
            style = {{marginHorizontal: 50,backgroundColor: `rgb(50,100,100)`, width: 300, height: 45, borderRadius: 20, textAlign: 'center'}}
            placeholder="Parent Full Name"
            />
        </View>
        <View style = {{marginVertical: 10}}>
            <Text>Country</Text>
            <TextInput 
            value={country}
            onChangeText={(newcountry) => setCountry(newcountry)}
            style = {{marginHorizontal: 50,backgroundColor: `rgb(50,100,100)`, width: 300, height: 45, borderRadius: 20, textAlign: 'center'}}
            placeholder="Country"
            />
        </View>
        <View style = {{marginVertical: 10}}>
            <Text>City/Town</Text>
            <TextInput 
            value={city}
            onChangeText={(newcity) => setCity(newcity)}
            style = {{marginHorizontal: 50,backgroundColor: `rgb(50,100,100)`, width: 300, height: 45, borderRadius: 20, textAlign: 'center'}}
            placeholder="City/Town"
            />
        </View>
        <View style = {{marginVertical: 10}}>
            <Text>Phone Number</Text>
            <TextInput 
            value={Phone}
            onChangeText={(newphone) => setPhone(newphone)}
            style = {{marginHorizontal: 50,backgroundColor: `rgb(50,100,100)`, width: 300, height: 45, borderRadius: 20, textAlign: 'center'}}
            placeholder="Phone Number"
            />
        </View>
        <View style = {{marginVertical: 10}}>
            <Text>Email</Text>
            <TextInput 
            value={email}
            onChangeText={(newemail) => setEmail(newemail)}
            style = {{marginHorizontal: 50,backgroundColor: `rgb(50,100,100)`, width: 300, height: 45, borderRadius: 20, textAlign: 'center'}}
            placeholder="Email"
            />
        </View>
        <View style = {{marginVertical: 10}}>
            <Text>Password</Text>
            <TextInput 
            value={password}
            onChangeText={(newpassword) => setPassword(newpassword)}
            style = {{marginHorizontal: 50,backgroundColor: `rgb(50,100,100)`, width: 300, height: 45, borderRadius: 20, textAlign: 'center'}}
            placeholder="Password"
            textContentType="password"
            />
        </View>
        <View style = {{alignItems: 'center'}}>
            <TouchableOpacity
            onPress={submitted}
            style = {{marginHorizontal: '49%', borderRadius: 30, width: 150, height: 50, backgroundColor: `rgb(50,150,250)`,alignItems: 'center',justifyContent: 'center',marginVertical: 20}}
            >
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>

}

export default LoginQirat2