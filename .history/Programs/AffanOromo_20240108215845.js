import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Link } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const AffanOromo = () => {

    return(
      <View style = {{flex: 1, backgroundColor: randomRGB(),justifyContent: 'flex-start'}}>
      <View>
      <Text style = {styles.header}>Affan Oromo language Programs</Text>
      </View>
      <View>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator = {false}
      style = {{marginVertical: 20}}
      >
        <View>
          <Link to={'/Oromolink'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Neshida or Menzuma</Text>
          </Link>
          <Link to={'/Oromolink'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Education or Ders</Text>
          </Link>
          <Link to={'/Oromolink'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Timely Education</Text>
          </Link>
          <Link to={'/Oromolink'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Video Clip</Text>
          </Link>
          </View>
          <View>
          <Link to={'/Oromolink2'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Seasonal Programs</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Talk show</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Entertainment programs</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Womens Programs</Text>
          </Link>
          </View>
          <View>
          <Link to={'/Oromolink2'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Mewlid Program</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Stage Works</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Event and holiday programs</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Short Programs</Text>
          </Link>
          </View>
          <View>
          <Link to={'/Oromolink2'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Quran and Praying</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Program slogan</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Health Programs</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Fetwa Program</Text>
          </Link>
          </View>
          <View>
          <Link to={'/Oromolink2'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Documentary</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Drama</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={styles.link}
          >
            <Text style = {{fontSize: 20}}>Story</Text>
          </Link>
          </View>
      </ScrollView>
      </View>
  </View>
    )
}

const randomRGB = () => {

  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create ({
  link: {
    marginHorizontal: 30,
    backgroundColor: randomRGB(), 
    marginVertical: 20,
    width: 320,
    height: 70,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30
  }, 
  header: {
    textAlign: 'center', 
    fontSize: 20, 
    marginVertical: 30,
    backgroundColor: randomRGB()
  }
})

export default AffanOromo