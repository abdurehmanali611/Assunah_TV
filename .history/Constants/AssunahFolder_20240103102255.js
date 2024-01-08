import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const AssunahFolder = () => {
  return (
    <View style = {{marginVertical: 20}}>
    <View style = {{backgroundColor: `rgb(100,100,200)`}}>
     <View style = {styles.title}>
     <Image 
     source={require('../assets/assunah.jpg')}
     style = {{width: 30, height: 30}}
     />
     <Text style = {{marginLeft: 90, fontSize: 19, fontWeight: 800}}>Assunah Tv</Text>
     </View>
     <ScrollView horizontal>
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
      </View>
      </ScrollView>
      <ScrollView>
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
      </ScrollView>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create ({
    title: {
      marginVertical: 10,
      backgroundColor: `rgb(200,100,50)`,
      height: 50,
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
    },
    linkcollection: {
      flexDirection: 'row', 
      marginTop: 20,
      backgroundColor: `rgb(200,100,200)`
    },
    links: {
      marginHorizontal: 20,
      backgroundColor: `rgb(200,200,20)`
    }
});

export default AssunahFolder;