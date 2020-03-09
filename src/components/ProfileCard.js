import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileCard = ({ account }) => {
  return (
    <View style={styles.mainBlock}>
      <MaterialCommunityIcons name="face-profile" />
      <Text style={styles.title}> Your Profile</Text>
      <QRCode
        value={account.seed}
        size={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainBlock: {
    borderWidth: 1,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});

export default ProfileCard;
