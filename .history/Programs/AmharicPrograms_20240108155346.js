import { Link } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, ScrollView } from "react-native";

const AmharicPrograms = () => {

    return(
        <View style = {{flex: 1, backgroundColor: 'silver',justifyContent: 'flex-start'}}>
            <View>
            <Text style = {{textAlign: 'center', fontSize: 20, marginVertical: 30}}>Amharic language Programs</Text>
            </View>
            <View>
            <ScrollView
            horizontal 
            style = {{marginVertical: 20}}
            >
              <View style = {styles.linkgroup}>
                <Link to={'/Amhariclink'}
                style ={{marginHorizontal: 30,textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Neshida or Menzuma</Text>
                </Link>
                <Link to={'/Amhariclink'}
                style ={{marginHorizontal: 30,textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Education or Ders</Text>
                </Link>
                <Link to={'/Amhariclink2'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Timely Education</Text>
                </Link>
                <Link to={'/Amhariclink2'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Video Clip</Text>
                </Link>
                </View>
                <View style = {styles.}>
                <Link to={'/Amhariclink3'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Seasonal Programs</Text>
                </Link>
                <Link to={'/Amhariclink4'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Talk show</Text>
                </Link>
                <Link to={'/Amhariclink4'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Entertainment programs</Text>
                </Link>
                <Link to={'/Amhariclink4'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Womens Programs</Text>
                </Link>
                </View>
                <Link to={'/Amhariclink4'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Mewlid Program</Text>
                </Link>
                <Link to={'/Amhariclink4'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Stage Works</Text>
                </Link>
                <Link to={'/Amhariclink4'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Event and holiday programs</Text>
                </Link>
                <Link to={'/Amhariclink4'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Short Programs</Text>
                </Link>
                <Link to={'/Amhariclink5'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Quran and Praying</Text>
                </Link>
                <Link to={'/Amhariclink5'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Program slogan</Text>
                </Link>
                <Link to={'/Amhariclink5'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Health Programs</Text>
                </Link>
                <Link to={'/Amhariclink5'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Fetwa Program</Text>
                </Link>
                <Link to={'/Amhariclink5'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Documentary</Text>
                </Link>
                <Link to={'/Amhariclink5'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Drama</Text>
                </Link>
                <Link to={'/Amhariclink5'}
                style ={{marginHorizontal: 30, textDecorationLine: 'underline',backgroundColor: '#3876BF', marginVertical: 20}}
                >
                  <Text style = {{fontSize: 20}}>Story</Text>
                </Link>
            </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
  linkgroup: {

  }
})

export default AmharicPrograms