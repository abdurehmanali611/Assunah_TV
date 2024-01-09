import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Link } from "@react-navigation/native";

const AffanOromo = () => {

    return(
      <View style = {{flex: 1, backgroundColor: 'silver',justifyContent: 'flex-start'}}>
      <View>
      <Text style = {{textAlign: 'center', fontSize: 20, marginVertical: 30}}>Affan Oromo language Programs</Text>
      </View>
      <View>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator = {false}
      style = {{marginVertical: 20}}
      >
        <View>
          <Link to={'/Oromolink'}
          style ={{marginHorizontal: 30,textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Neshida or Menzuma</Text>
          </Link>
          <Link to={'/Oromolink'}
          style ={{marginHorizontal: 30,textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Education or Ders</Text>
          </Link>
          <Link to={'/Oromolink'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Timely Education</Text>
          </Link>
          <Link to={'/Oromolink'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Video Clip</Text>
          </Link>
          </View>
          <View>
          <Link to={'/Oromolink2'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Seasonal Programs</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Talk show</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Entertainment programs</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Womens Programs</Text>
          </Link>
          </View>
          <View>
          <Link to={'/Oromolink2'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Mewlid Program</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Stage Works</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Event and holiday programs</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Short Programs</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Quran and Praying</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Program slogan</Text>
          </Link>

          <Link to={'/Oromolink2'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Health Programs</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Fetwa Program</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Documentary</Text>
          </Link>
          <Link to={'/Oromolink2'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Drama</Text>
          </Link>
          </View>
          <Link to={'/Oromolink2'}
          style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
          >
            <Text style = {{fontSize: 20}}>Story</Text>
          </Link>
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

export default AffanOromo