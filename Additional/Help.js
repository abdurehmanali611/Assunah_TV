import { Link } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, ScrollView, View } from 'react-native';

const SupportPage = () => {

    return <ScrollView style={styles.overall}>
      <Text style={styles.header}>This page to help you about this app</Text>
      <View>
        <Text style = {styles.faq}>FAQS</Text>
        <View>
          <Link 
          to={'Home'}
          style = {styles.link1}
          >
          <Text>How to see the live programs</Text>
          </Link>
        </View>
        <View>
          <Link 
          to={'Home'}
          style = {styles.link1}
          >
          <Text>How to register children to Assunah Qirat center</Text>
          </Link>
        </View>
      </View>
      <View>
        <Text style = {styles.title}>WHY Assunah TV in Mobile App</Text>
        <View>
          <Text style = {styles.paragraph}>  Assunah TV is the great Islamic media in ethiopia and it comes with multiple 
            and versatile programs and languages. The main objective is to make islam well known 
            by everyone specially by the muslim community whatever its language is and whatever its
            race is annd spreading the right path and creed of it world wide. For sure it starts with
            accompaining ethiopian languages only but for the future inshaallah we will vast it to serve world wide.
            To achieve this goal this mobile app is as the first move and we ask allah to help us on this path and we ask
            you our followers to support us on this way</Text>
            <Text style = {styles.jeza}>Jezakumullah</Text>
            <Text style = {styles.jeza}>Thank you for your time</Text>
        </View>
      </View>
    </ScrollView>
};

const styles = StyleSheet.create ({
    overall: {
      flex: 1,
    },
    header: {
      textAlign: 'center',
      fontSize: 20,
      margin: 10,
      fontWeight: 'bold'
    },
    faq: {
      fontSize: 18,
      margin: 10,
      textDecorationLine: 'underline'
    },
    link1: {
      textDecorationLine: 'underline',
      paddingLeft: 30,
      margin: 20,
      fontSize: 18
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      margin: 10,
      fontWeight: 'bold',
    },
    paragraph: {
      marginHorizontal: 18,
      fontSize: 18
    },
    jeza: {
      textAlign: 'center',
      fontSize: 18,
      width: 250,
      alignSelf: 'center',
      height: 60,
      textAlignVertical: 'center',
      borderRadius: 30,
      marginVertical: 10
    }
})

export default SupportPage;
