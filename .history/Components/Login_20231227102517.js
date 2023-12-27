import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { Link } from '@react-navigation/native'
import { Alert } from 'react-native'

const Login = ({navigation}) => {

  const link = <Link  to='/Sign'>
         <Text>SignUp</Text>
        </Link>

   const [emailvalue, setEmailInput] = useState('');
   const [passwordvalue, setPasswordInput] = useState('');

  const emailsubmitted = () => {

     emailvalue === '' || passwordvalue === '' ||
     emailvalue.includes('@') === false || 
     passwordvalue.length < 6 ?
     Alert.alert(
      'Invalidity',
      'Invalid Email or Password',
      [
        {text: 'Ok'}
      ]
     )
     : navigation.navigate('Home')
  }
  
  return (
    
    <View style = {styles.overall}>
      <View>
        <Text style = {styles.assunah}>ASSUNAH TV</Text>
      </View>
      <View style = {styles.mainpart}>
      <Text style = {styles.LoginLabel}>Login</Text>
      <View style = {styles.texts}>
        <Text style = {styles.elements}>Email</Text>
        <TextInput 
        onChangeText={(newemail) => setEmailInput(newemail)}
        textContentType='emailAddress'
        autoCapitalize='none'
        autoCorrect = {false} 
        value={emailvalue}
        style = {styles.inputelements}
        placeholder='Email'
        />
        <Text style = {styles.elements}>Password</Text>
        <TextInput 
        onChangeText={(newpassword) => setPasswordInput(newpassword)}
        textContentType='password'  
        autoCapitalize='none'
        autoCorrect = {false}
        value={passwordvalue}       
        style = {styles.inputelements}
        placeholder='Password'
        />
      </View>
      <View>
        <TouchableOpacity 
        onPress={emailsubmitted}
        style = {styles.btn_login}>
            <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style = {{
            marginVertical: 20,
            fontSize: 15,
            backgroundColor: '#8BE8E5',
            width: 350,
            height: 50,
            textAlign: 'center',
            marginHorizontal: 10
        }}>    Or create an account      {link}</Text>
      </View>
      </View>
    </View>
  )
}

const randomRGB = () => {

  const red = Math.floor(Math.random() *256)
  const green = Math.floor(Math.random() *256)
  const blue = Math.floor(Math.random() *256)

  return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({
    LoginLabel: {
      fontSize: 40,
      fontWeight: 'bold',
     marginHorizontal: '30%',
     marginTop: 10,
    },
    mainpart: {
    width: 390,
    backgroundColor: randomRGB(),
    flex: 1,
    },
    assunah: {
      fontSize: 25,
      fontWeight: '800',
      backgroundColor: randomRGB(),
      width: 400,
      textAlign: 'center',
      height: 100,
      paddingLeft: 0,
      paddingTop: 30,
      paddingRight: 35
    },
    btn_login: {
        alignSelf: 'center',
        backgroundColor: randomRGB(),
        width: 120,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginVertical: 20
    },
    overall: {
        flex: 1,
        marginHorizontal: 10
    },
    texts: {
        marginVertical: 10
    },
    elements: {
        marginVertical: 20,
        marginHorizontal: 10,
        fontSize: 19,
        color: '#A2C579'
    },
    inputelements:{
        marginHorizontal: 65,
        backgroundColor: randomRGB(),
        color: 'green',
        textAlign: 'center',
        borderColor: 'brown',
        borderWidth: 1.5,
        borderRadius: 10,
        width: 270 
    }
  
});
export default Login