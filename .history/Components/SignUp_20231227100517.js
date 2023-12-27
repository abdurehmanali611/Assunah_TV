import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'

const SignUp = () => {

  const [name , setName] = useState('')
  const [fathername , setFatherName] = useState('')
  const [grandfathername , setGrandFatherName] = useState('')
  const [sex , setSex] = useState('')
  const [region , setRegion] = useState('')
  const [city , setCity] = useState('')
  const [phonenumber , setPhoneNumber] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const navigation = useNavigation();
  
  const SignedUp = () => {

    name === '' || fathername === '' || 
    grandfathername === '' || sex === '' ||
    region === '' || city === '' || 
    phonenumber === '' || email === '' || 
    password === '' || email.includes('@') === false ||
    password.length < 6 ? Alert.alert (
      'Invalidity',
      'Please Fill the informations Correctlly',
      [
        {text: 'OK'}
      ]
    )
    : 
    navigation.navigate('Home')
  }
  return (
    <ScrollView style = {styles.overall}>
      <View style = {styles.SignLabel}>
      <Text>SignUp</Text>
      </View>
      <View style = {styles.components}>
      <Text style = {styles.texts}>Name</Text>
      <TextInput 
      textContentType='name'
      value={name}
      onChangeText={(newname) => setName(newname)}
      style = {styles.acceptors}
      placeholder='Your Name'/>
      <Text style = {styles.texts}>Father Name</Text>
      <TextInput 
      textContentType='middleName'
      value={fathername}
      onChangeText={(newfathername) => setFatherName(newfathername)}
      style = {styles.acceptors}
      placeholder='Father Name'/>
      <Text style = {styles.texts}>Grand Father Name</Text>
      <TextInput 
      textContentType='familyName'
      value={grandfathername}
      onChangeText={(newgrandfathername) => setGrandFatherName(newgrandfathername)}
      style = {styles.acceptors}
      placeholder='G.F Name'/>
      <Text style = {styles.texts}>Sex</Text>
      <RadioButton.Group 
      value= {sex}
      onValueChange={(yoursex) => setSex(yoursex)}
      >
        <RadioButton.Item 
        style = {styles.radiobutton}
        label="Male" value="Male" color='red' />
        <RadioButton.Item 
        style = {styles.radiobutton}
        label="Female" value="Female" color='pink'/>
      </RadioButton.Group>
      <Text style = {styles.texts}>Region</Text>
      <TextInput 
      value={region}
      onChangeText={(newregion) => setRegion(newregion)}
      style = {styles.acceptors}
      textContentType='addressState'
      placeholder='Region'/>
      <Text style = {styles.texts}>City</Text>
      <TextInput 
      value={city}
      onChangeText={(newcity) => setCity(newcity)}
      style = {styles.acceptors}
      textContentType='addressCity'
      placeholder='City'/>
      <Text style = {styles.texts}>Phone Number</Text>
      <TextInput 
      value={phonenumber}
      onChangeText={(newphonenumber) => setPhoneNumber(newphonenumber)}
      style = {styles.acceptors}
      textContentType='telephoneNumber'
      text = '+251'
      placeholder='Phone Number'/>
      <Text style = {styles.texts}>Email</Text>
      <TextInput 
      value={email}
      onChangeText={(newemail) => setEmail(newemail)}
      style = {styles.acceptors}
      textContentType='emailAddress'
      placeholder='Email'/>
      <Text style = {styles.texts}>Password</Text>
      <TextInput
      value={password}
      onChangeText={(newpassword) => setPassword(newpassword)}
      style = {styles.acceptors}
      textContentType='password' 
      placeholder='Password'/>
      </View>
      <View>
        <TouchableOpacity 
        onPress={SignedUp}
        style = {styles.btn_sign}>
            <Text>SignUp</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const randomRGB = () => {

  const red = Math.floor(Math.random() *256)
  const green = Math.floor(Math.random() *256)
  const blue = Math.floor(Math.random() *256)

  return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({
    overall:{
    backgroundColor: randomRGB(),
    flex : 1
    },
    SignLabel:{
    alignItems: 'center',
    marginTop: 10,
    },
    components:{

    },
    texts:{
     marginVertical: 1.5,
     marginHorizontal: 10
    },
    acceptors:{
     marginHorizontal: 33,
     backgroundColor: randomRGB(),
     color: 'red'
    },
    btn_sign:{
     alignSelf: 'center',
     backgroundColor: randomRGB(),
     width: 120,
     height: 50,
     marginVertical: 20,
     alignItems: 'center',
     justifyContent: 'center',
     borderTopRightRadius: 30,
     borderBottomLeftRadius: 30
    },
    radiobutton: {
        marginVertical: 0,
        alignItems: 'center'
    }
});
export default SignUp