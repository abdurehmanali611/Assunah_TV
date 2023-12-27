import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AssunahKids = () => {
  return (
    <View>
      <Text>Assunah Kids program schedules</Text>
      <View>
        <View>
          <TouchableOpacity>
            <Text>Story</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Animal's world</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Animation</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Hand craft</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>our time</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>science's world</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>quran's story by Animation</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Alif</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}

export default AssunahKids