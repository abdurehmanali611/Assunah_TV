import { View, Text, Image, Linking } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Link } from '@react-navigation/native'

const Contacts = ({phoneNumber}) => {
  return (
    <View>
      <Text>Welcome to Assunah Tv Contact info</Text>
      <Text>Social Media</Text>
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
      <Text style = {{marginVertical: 20}}>If you have any problem or if you want to give any suggestion to us use our Email address or phone numbers listed below</Text>
      <View style = {{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity 
          onPress={() => Linking.openURL('mailto:abdurehmanali@g-mail.com')}
          style = {{marginHorizontal: 13}}
          >
            <Image 
            source={require('../assets/email.png')}
            style = {{width: 40, height: 40}}
            />
            <Text>Email</Text>
          </TouchableOpacity>
        </View>
        <View style = {{marginLeft: 30}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('tel:+251935000642')}
          >
            <Image 
            source={require('../assets/phone.png')}
            style = {{width: 40, height: 40}}
            />
            <Text>Abdurehman Ali</Text>
          </TouchableOpacity>
        </View>
        <View style = {{marginLeft: 30}}>
          <TouchableOpacity
          onPress={() => Linking.openURL('tel:+251935000642')}
          >
            <Image 
            source={require('../assets/phone.png')}
            style = {{width: 40, height: 40}}
            />
            <Text>Remedan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Contacts