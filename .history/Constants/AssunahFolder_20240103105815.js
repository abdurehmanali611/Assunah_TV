import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const AssunahFolder = () => {
  return (
    <ScrollView style = {{marginVertical: 10}}>
    <View style = {{backgroundColor: randomRGB()}}>
     <View style = {styles.title}>
     <Image 
     source={require('../assets/assunah.jpg')}
     style = {{width: 70, height: 50}}
     />
     <Text style = {{fontSize: 19, marginHorizontal: 10}}>Assunah Tv</Text>
     </View>
     <Text 
     style = {{fontSize: 20, textAlign: 'center', paddingVertical: 8, backgroundColor: randomRGB(), width: 350, marginHorizontal: 15, borderRadius: 20}}
     >
      Assunah Tv Programs
    </Text>
     <ScrollView>
      <View style = {styles.linkcollection}>
      <Link to = '/Amharic'
      style = {styles.links}
      >
      <Text>Amharic</Text>
      </Link>
      <Link to = '/Arabic'
      style = {styles.links}
      >
      <Text>Arabic</Text>
      </Link>
      <Link to = '/Oromo'
      style = {styles.links}
      >
      <Text>Affan Oromo</Text>
      </Link>
      <Link to = '/Tigray'
      style = {styles.links}
      >
      <Text>Tigray</Text>
      </Link>
      <Link to = '/Afar'
      style = {styles.links}
      >
      <Text>Afar</Text>
      </Link>
      <Link to = '/Somali'
      style = {styles.links}
      >
      <Text>Ethio-Somali</Text>
      </Link>
      <Link to = '/Gumuz'
      style = {styles.links}
      >
      <Text>Gumuz</Text>
      </Link>
      <Link to = '/Halaba'
      style = {styles.links}
      >
      <Text>Halaba</Text>
      </Link>
      <Link to = '/Hadere'
      style = {styles.links}
      >
      <Text>Hadere</Text>
      </Link>
      </View>
      </ScrollView>
    </View>
  </ScrollView>
  )
}

const randomRGB = () => {

  const red  = Math.floor(Math.random() * 256)
  const green  = Math.floor(Math.random() * 256)
  const blue  = Math.floor(Math.random() * 256)

  return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create ({
    title: {
      marginVertical: 10,
      backgroundColor: randomRGB(),
      height: 60,
      display: 'flex',
      flexDirection: 'row',
      width: 360,
      marginHorizontal: 15,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    linkcollection: {
      marginTop: 20,
      backgroundColor: randomRGB(),
      
    },
    links: {
      marginHorizontal: 20,
      backgroundColor: randomRGB(),
      marginVertical: 20,
      textAlign: 'center',
      width: 300,
      height: 50,
      textAlignVertical: 'center',
      fontSize: 20,
      alignSelf: 'center',
      borderRadius: 30
    }
});

export default AssunahFolder;