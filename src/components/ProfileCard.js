import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const ProfileCard = ({account}) => {
  return <View style={styles.mainBlock}>
    <Text style={styles.title}> Your Profile</Text>
    <Text style={styles.title}> Account id: {account.seed}</Text>
    <QRCode
      value="http://awesome.link.qr"
      size={200}
    />
  </View>
};

const styles = StyleSheet.create({
  mainBlock: {
    borderWidth: 1,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  }
});

export default ProfileCard;
