import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'

const AssunahKids = () => {
  return (
    <ScrollView>
      <Text style = {{marginVertical: 20, textAlign: 'center', fontSize: 19}}>Assunah Kids program schedules</Text>
      <View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity 
          style = {styles.kidstouch}
          >
            <Text>Story</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Animal's world</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Animation</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Hand craft</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>our time</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>science's world</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          
          >
            <Text>quran's story by Animation</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Alif</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text>Education</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Drawing</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text>Promotion</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>shorts</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text>shorts</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Mewlid</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text>Arafa</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Let's learn</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text>Food by kids</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Drawing</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text>words by languages</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Do don't Do by Imran</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text>Playing's before</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Knowing the holy's</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text>In our house</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Let's know Arabic</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text>Remedan holy month</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Quran reciting</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text>Learnable Neshidas</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>special question and answer</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text>Azkar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>kids Example</Text>
          </TouchableOpacity>
        </View>
        <View style = {{alignItems: 'center'}}>
          <TouchableOpacity>
            <Text>Neshidas</Text>
          </TouchableOpacity>
        </View>
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

const styles = StyleSheet.create ({
     kidstouch: {
      marginVertical: 20,
      backgroundColor: randomRGB(),
      width: 170,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30
     }
})

export default AssunahKids