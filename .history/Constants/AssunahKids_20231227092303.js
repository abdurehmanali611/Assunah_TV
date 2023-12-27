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
          style = {styles.kidstouch}
          >
            <Text>quran's story by Animation</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Alif</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Education</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Drawing</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Promotion</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>shorts</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>shorts</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Mewlid</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Arafa</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Let's learn</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Food by kids</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Drawing</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>words by languages</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Do don't Do by Imran</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Playing's before</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Knowing the holy's</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>In our house</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Let's know Arabic</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Remedan holy month</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Quran reciting</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Learnable Neshidas</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>special question and answer</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>Azkar</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
            <Text>kids Example</Text>
          </TouchableOpacity>
        </View>
        <View style = {{alignItems: 'center'}}>
          <TouchableOpacity
          style = {styles.kidstouch}
          >
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