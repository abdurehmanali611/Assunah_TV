import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native'

const AdditionalExtra = () => {

  const copyright = <Text>
    &copy;
  </Text>

  return (
    <View style = {styles.mainbody}>
      <Text style = {styles.maintext}>Additional and Extra things</Text>
      <Text style = {styles.nexttext}>Hey Muslim brothers and sisters welcome to our Page for the things that are additional</Text>
      <View style = {styles.links}>
        <Link 
        style = {{marginVertical: 10}}
        to={'/support'}>
        <Text style = {{fontSize: 20,textDecorationLine: 'underline'}}>Support Assunah</Text>
        </Link>
        <Link 
        style = {{marginVertical: 10}}
        to={'/help'}>
        <Text style = {{fontSize: 20,textDecorationLine: 'underline'}}>Help</Text>
        </Link>
        <Link 
        style = {{marginVertical: 10}}
        to={'/rate'}>
        <Text style = {{fontSize: 20,textDecorationLine: 'underline'}}>Rate Us</Text>
        </Link>
      </View>
      <View style = {{alignItems: 'center',marginVertical: 15}}>
       <Text style = {{fontSize: 20}}>Copyright {copyright} 2022/1445</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  maintext: {
    textAlign: 'center',
    fontSize: 22,
    marginVertical: 15,
    marginTop: 90
  },
  nexttext: {
     fontSize: 17,
     marginVertical: 15,
     textAlign: 'center'
  },
  links : {
    alignItems: 'center',
    marginVertical: 20
  },
  mainbody: {
    backgroundColor: `rgb(100,200,100)`,
    flex: 1
  }
})

export default AdditionalExtra