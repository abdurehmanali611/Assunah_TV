import { View, Text, Image, Linking } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'

const Contacts = () => {
  return (
    <View>
      <Text>Welcome to Assunah Tv Contact info</Text>
      <View style = {styles.socialmedia}>
      <Text style  ={styles.social}>Social Media</Text>
      <View style = {{flexDirection: 'row', marginVertical: 20}}>
      <View style = {{marginHorizontal: 20}}>
        <TouchableOpacity
        onPress={() => Linking.openURL('https://t.me/+251935000642')}
        style = {{flexDirection: 'row'}}> 
        <Image 
        source={require('../assets/telegram.png')}
        style = {{width: 40, height: 40}}
        />
        <Text>
          Telegram
        </Text>
        </TouchableOpacity>
      </View>
      <View style  = {{marginLeft: 35}}>
        <TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?phone=+251935000642')}
        style = {{flexDirection: 'row'}}> 
        <Image 
        source={require('../assets/whatsapp.png')}
        style = {{width: 40, height: 40}}
        />
        <Text>Whatsapp</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style  = {{alignItems: 'center', marginVertical: 20}}>
        <TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?phone=+251935000642')}
        style = {{flexDirection: 'row'}}> 
        <Image 
        source={require('../assets/email.png')}
        style = {{width: 40, height: 40}}
        />
        <Text>Email</Text>
        </TouchableOpacity>
      </View>
      </View>
      <Text style = {{textAlign: 'center'}}>Phone</Text>
      <View style = {{flexDirection: 'row'}}>
        <View style = {{flexBasis: '50%'}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('tel:+251935000642')}
          >
            <Image 
            source={require('../assets/phone.png')}
            style = {{width: 40, height: 40, alignSelf: 'center'}}
            />
            <Text style = {{textAlign: 'center'}}>Abdurehman Ali</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexGrow: 2}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('tel:+251935000642')}
          >
            <Image 
            source={require('../assets/phone.png')}
            style = {{width: 40, height: 40, alignSelf: 'center'}}
            />
            <Text style = {{textAlign: 'center'}}>Remedan</Text>
          </TouchableOpacity>
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
  socialmedia: {
     backgroundColor: randomRGB(),
     width: 360,
     marginHorizontal: 10,
     borderRadius: 30,
     alignItems: 'center'
  },
  social: {
    fontSize: 19,
    fontWeight: 'bold',
    marginVertical: 10,
    textDecorationLine: 'underline',
    sha
  }
})

export default Contacts