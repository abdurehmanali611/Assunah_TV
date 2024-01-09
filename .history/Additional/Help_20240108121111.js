import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const SupportPage = () => {

  const contactInformation = {
    email: 'support@example.com',
    phone: '+1234567890',
    // Additional contact info...
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Support</Text>

      {/* FAQs Section */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>FAQs</Text>
      {faqs.map((faq, index) => (
        <TouchableOpacity key={index} style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{faq.question}</Text>
          <Text>{faq.answer}</Text>
        </TouchableOpacity>
      ))}

      {/* Troubleshooting Guides Section */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Troubleshooting Guides</Text>
      {troubleshootingGuides.map((guide, index) => (
        <TouchableOpacity key={index} style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{guide.title}</Text>
          <Text>{guide.content}</Text>
        </TouchableOpacity>
      ))}

      {/* Contact Information Section */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Contact Information</Text>
      <Text>Email: {contactInformation.email}</Text>
      <Text>Phone: {contactInformation.phone}</Text>
      {/* Additional contact info... */}
    </ScrollView>
  );
};

export default SupportPage;
