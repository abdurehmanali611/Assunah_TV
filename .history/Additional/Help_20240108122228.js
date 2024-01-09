import React from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const SupportPage = () => {

  const contactInformation = {
    email: 'abdurehmanali611@g-mail.com',
    phone: '+1234567890',
  };

  return (
    <View>
    <View>
    <ImageBackground 
      source={require('../assets/as-sunnah Gold V2.png')}
      />
      </View>
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Support</Text>

      {/* Contact Information Section */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Contact Information</Text>
      <Text>Email: {contactInformation.email}</Text>
      <Text>Phone: {contactInformation.phone}</Text>
      {/* Additional contact info... */}
    </ScrollView>
    </View>
  );
};

export default SupportPage;
