import React from "react";
import { useState } from "react";
import { Alert, ScrollView, TextInput } from "react-native";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";

const LoginQirat = ({navigation}) => {

    const [sex1, setSex1] = useState()
    const [sex2, setSex2] = useState()
    const [sex3, setSex3] = useState()
    const [sex4, setSex4] = useState()
    const [sex5, setSex5] = useState()
    const [name, setName] = useState('')
    const [name2, setName] = useState('')
    const [gfname, setGFName] = useState('')
    const [region, setRegion] = useState('')
    const [ischecked, setIsChecked] = useState(false) 

    const nextPage = () => {

        if(name === ''|| fname === '' || 
        gfname === ''|| region === ''|| ischecked === false){
            Alert.alert(
                'Input',
                'Please enter the inputs correctly',
            [
                {text: 'Ok'}
            ]
            )
        }else{
            navigation.navigate('Login2')
        }

    }

    return <ScrollView>
        <Text>Please Fill the Registration Form below</Text>
        <Text style = {{marginVertical: 20,marginHorizontal: 60, fontSize: 20, fontStyle: 'italic'}}>Registration Form</Text>
        <View>
       <View>
            <Text>First Student Full Name</Text>
            <TextInput 
            value= {name}
            onChangeText={(newname) => setName(newname)}
            style = {{marginHorizontal: 50,backgroundColor: `rgb(50,100,100)`, width: 300, height: 40, borderRadius: 20, textAlign: 'center'}}
            placeholder="First child Name"
            />
        </View>
        <View>
            <RadioButton.Group
            value={sex1}
            onValueChange={(newsex) => {
                setSex1(newsex)
                setIsChecked(!ischecked)
            }}
            >
                <RadioButton.Item
                style = {{marginHorizontal: 130}}
                label="M"
                value='men'
                />
                <RadioButton.Item
                style = {{marginHorizontal: 130}}
                label="F"
                value='female'
                />
            </RadioButton.Group>
        </View>
        <View style = {{marginVertical: 10}}>
            <Text>Second Student Full Name</Text>
            <TextInput 
            value= {fname}
            onChangeText={(newfname) => setFName(newfname)}
            style = {{marginHorizontal: 50,backgroundColor: `rgb(50,100,100)`, width: 300, height: 45, borderRadius: 20, textAlign: 'center'}}
            placeholder="Second Child Name"
            />
        </View>
        <View>
            <RadioButton.Group
            value={sex2}
            onValueChange={(newsex) => {
                setSex2(newsex)
                setIsChecked(!ischecked)
            }}
            >
                <RadioButton.Item
                style = {{marginHorizontal: 130}}
                label="M"
                value='men'
                />
                <RadioButton.Item
                style = {{marginHorizontal: 130}}
                label="F"
                value='female'
                />
            </RadioButton.Group>
        </View>
        <View style = {{marginVertical: 10}}>
            <Text>Third Student Full Name</Text>
            <TextInput 
            value={gfname}
            onChangeText={(newgfname) => setGFName(newgfname)}
            style = {{marginHorizontal: 50,backgroundColor: `rgb(50,100,100)`, width: 300, height: 45, borderRadius: 20, textAlign: 'center'}}
            placeholder="Third Child Name"
            />
        </View>
        <View>
            <RadioButton.Group
            value={sex3}
            onValueChange={(newsex) => {
                setSex3(newsex)
                setIsChecked(!ischecked)
            }}
            >
                <RadioButton.Item
                style = {{marginHorizontal: 130}}
                label="M"
                value='men'
                />
                <RadioButton.Item
                style = {{marginHorizontal: 130}}
                label="F"
                value='female'
                />
            </RadioButton.Group>
        </View>
        <View style = {{marginVertical: 10}}>
            <Text>Fourth Student Full Name</Text>
            <TextInput 
            value={gfname}
            onChangeText={(newgfname) => setGFName(newgfname)}
            style = {{marginHorizontal: 50,backgroundColor: `rgb(50,100,100)`, width: 300, height: 45, borderRadius: 20, textAlign: 'center'}}
            placeholder="Fourth Child Name"
            />
        </View>
        <View>
            <RadioButton.Group
            value={sex4}
            onValueChange={(newsex) => {
                setSex4(newsex)
                setIsChecked(!ischecked)
            }}
            >
                <RadioButton.Item
                style = {{marginHorizontal: 130}}
                label="M"
                value='men'
                />
                <RadioButton.Item
                style = {{marginHorizontal: 130}}
                label="F"
                value='female'
                />
            </RadioButton.Group>
        </View>
        <View style = {{marginVertical: 10}}>
            <Text>Fifth Student Full Name</Text>
            <TextInput 
            value={gfname}
            onChangeText={(newgfname) => setGFName(newgfname)}
            style = {{marginHorizontal: 50,backgroundColor: `rgb(50,100,100)`, width: 300, height: 45, borderRadius: 20, textAlign: 'center'}}
            placeholder="Fifth Child Name"
            />
        </View>
        <View>
            <RadioButton.Group
            value={sex5}
            onValueChange={(newsex) => {
                setSex5(newsex)
                setIsChecked(!ischecked)
            }}
            >
                <RadioButton.Item
                style = {{marginHorizontal: 130}}
                label="M"
                value='men'
                />
                <RadioButton.Item
                style = {{marginHorizontal: 130}}
                label="F"
                value='female'
                />
            </RadioButton.Group>
        </View>
        <View style = {{marginVertical: 25,marginHorizontal: '49%',alignItems: 'center'}}>
            <TouchableOpacity
            style = {{borderRadius: 30, width: 150, height: 60, backgroundColor: `rgb(100,150,200)`,alignItems: 'center',justifyContent: 'center'}}
            onPress={nextPage}
            >
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
        </View>
    </ScrollView>

}

export default LoginQirat