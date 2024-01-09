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
        style = {{width: 50, height: 50, borderRadius: 20}}
        />
        <Text style = {{marginTop: 10}}>
          Telegram
        </Text>
        </TouchableOpacity>
      </View>
      <View style  = {{marginLeft: 35}}>
        <TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?phone=+251935000642')}
        style = {{flexDirection: 'row'}}> 
        <Image 
        source={require('../assets/whatsapp.png')}
        style = {{width: 50, height: 50, borderRadius: 20}}
        />
        <Text style = {{marginTop: 10}}>Whatsapp</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style  = {{alignItems: 'center', marginVertical: 20}}>
        <TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?phone=+251935000642')}
        style = {styles}> 
        <Image 
        source={require('../assets/email.png')}
        style = {{width: 50, height: 50, borderRadius: 20, alignSelf: 'center'}}
        />
        <Text style = {{marginTop: 10, textAlign: 'center'}}>Email</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style = {styles.socialmedia}>
      <Text style = {styles.social}>Phone</Text>
      <View style = {{flexDirection: 'row'}}>
        <View style = {{marginHorizontal: 15, marginVertical: 15}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('tel:+251935000642')}
          >
            <Image 
            source={require('../assets/phone.png')}
            style = {{width: 40, height: 40, alignSelf: 'center', borderRadius: 15}}
            />
            <Text>Abdurehman Ali</Text>
          </TouchableOpacity>
        </View>
        <View style = {{marginHorizontal: 20, marginVertical: 15}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('tel:+251935000642')}
          >
            <Image 
            source={require('../assets/phone.png')}
            style = {{width: 40, height: 40, alignSelf: 'center', borderRadius: 15}}
            />
            <Text>Remedan</Text>
          </TouchableOpacity>
        </View>
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
     alignItems: 'center',
     marginVertical: 20,
     paddingVertical: 20
  },
  social: {
    fontSize: 19,
    fontWeight: 'bold',
    marginVertical: 10,
    backgroundColor: randomRGB(),
    width: 200,
    textAlign: 'center',
    borderRadius: 20,
    height: 50,
    textAlignVertical: 'center'
  }
})

export default Contacts