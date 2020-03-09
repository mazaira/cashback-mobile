import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => (
  <View style={styles.mainBlock}>
    <Text> Settings screen</Text>
  </View>
);

const styles = StyleSheet.create({
  mainBlock: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
