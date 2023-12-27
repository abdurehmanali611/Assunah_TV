import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native'

const AssunahKids = () => {
  return (
    <ScrollView>
      <Text style = {{marginVertical: 20, textAlign: 'center', fontSize: 19}}>Assunah Kids program schedules</Text>
      <View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text>Story</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Animal's world</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text>Animation</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Hand craft</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text>our time</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>science's world</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity>
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
        <View >
          <TouchableOpacity>
            <Text>Arafa</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Let's learn</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Food by kids</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Drawing</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>words by languages</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Do don't Do by Imran</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Playing's before</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Knowing the holy's</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>In our house</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Let's know Arabic</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Remedan holy month</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Quran reciting</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Learnable Neshidas</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>special question and answer</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Azkar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>kids Example</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Neshidas</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default AssunahKids