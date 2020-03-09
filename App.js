import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ScanScreen from './src/screens/ScanScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarIcon: () => (<MaterialCommunityIcons name="home" style={styles.icons}/>) }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ tabBarIcon: () => (<Ionicons name="md-settings" style={styles.icons}/>) }}
        />
        <Tab.Screen
          name="Scan"
          component={ScanScreen}
          options={{ tabBarIcon: () => (<MaterialCommunityIcons name="qrcode-scan" style={styles.icons}/>) }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icons: {
    fontSize: 25,
    alignSelf: 'center',
    margin: 5,
  },
});
