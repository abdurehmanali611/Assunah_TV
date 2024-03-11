import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {StyleSheet, Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';

const RateUsModal = () => {

  const [rate, setRate] = useState(0)

  const submitted = () => {
  AsyncStorage.setItem('ratevalue', JSON.stringify(rate))
   }
   
    return <View style={styles.overall}>
      <View style={styles.txtparent}>
        <Text style={styles.txt}>Rate Us</Text>
      </View>
      <View>
      <Text style={styles.ratingtxt}>Rate Us here</Text>
      <Rating 
      type='star'
      ratingCount={5}
      startingValue={0}
      imageSize={40}
      tintColor='purple'
      onFinishRating={(rte) => setRate(rte)}
      />
      <TouchableOpacity onPress={submitted}
      style={styles.submitrate}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
        <View>
          <Text>You have rated {rate}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({

  overall: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtparent: {
    marginVertical: 30,
    backgroundColor: 'green',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'brown',
    textDecorationLine: 'underline'
  },
  ratingtxt: {
    marginBottom: 20,
    fontSize: 18
  },
  submitrate: {
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'rgb(150, 50,100)',
    width: 150,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 30
  }
})

export default RateUsModal;