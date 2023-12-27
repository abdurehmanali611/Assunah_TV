import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Link } from '@react-navigation/native'

const Contacts = () => {
  return (
    <View>
      <Text>Welcome to Assunah Tv Contact info</Text>
      <View style = {{flexDirection: 'row', marginVertical: 20}}>
      <View style = {{marginHorizontal: 20}}>
        <Link to={'/Home'}
        style = {{flexDirection: 'row'}}> 
        <Image 
        source={require('../assets/youtube.png')}
        style = {{width: 40, height: 40}}
        />
        <Text>Youtube</Text>
        </Link>
      </View>
      <View style  = {{marginLeft: 35}}>
        <Link to={'/Home'}
        style = {{flexDirection: 'row'}}> 
        <Image 
        source={require('../assets/facebook.png')}
        style = {{width: 40, height: 40}}
        />
        <Text>Facebook</Text>
        </Link>
      </View>
      </View>
      <View style = {{flexDirection: 'row', marginVertical: 20}}>
      <View style = {{marginHorizontal: 20}}>
        <Link to={'/Home'}
        style = {{flexDirection: 'row'}}> 
        <Image 
        source={require('../assets/telegram.png')}
        style = {{width: 40, height: 40}}
        />
        <Text>Youtube</Text>
        </Link>
      </View>
      <View style  = {{marginLeft: 35}}>
        <Link to={'/Home'}
        style = {{flexDirection: 'row'}}> 
        <Image 
        source={require('../assets/whatsapp.png')}
        style = {{width: 40, height: 40}}
        />
        <Text>Whatsapp</Text>
        </Link>
      </View>
      </View>
      <Text style = {{marginVertical: 20}}>If you have any problem or if you want to give any suggestion to us use our Email address or phone numbers listed below</Text>
      <View style = {{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity style = {{marginHorizontal: 13}}>
            <Image 
            source={require('../assets/email.png')}
            style = {{width: 40, height: 40}}
            />
            <Text>Email</Text>
          </TouchableOpacity>
        </View>
        <View style = {{marginLeft: 30}}>
          <TouchableOpacity>
            <Image 
            source={require('../assets/phone.png')}
            style = {{width: 40, height: 40}}
            />
            <Text>Abdurehman Ali</Text>
          </TouchableOpacity>
        </View>
        <View style = {{marginLeft: 30}}>
          <TouchableOpacity>
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