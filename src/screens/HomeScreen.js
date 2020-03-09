import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import useBackend from '../hooks/useBackend';

const HomeScreen = () => {
  const [account, errorMessage] = useBackend();

  return (
    <View style={styles.mainBlock}>
      {errorMessage
        ? <Text>{errorMessage}</Text>
        : null }

      <ProfileCard account={account} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainBlock: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
