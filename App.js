import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';

import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ScanScreen from './src/screens/ScanScreen';
import BalanceScreen from './src/screens/BalanceScreen';


import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as TransactionProvider } from './src/context/TransactionContext';

const StackAuth = createStackNavigator();
const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

function Auth() {
  return (
    <StackAuth.Navigator screenOptions={{ headerShown: false }}>
      <StackAuth.Screen name="Signup" component={SignupScreen} />
      <StackAuth.Screen name="Signin" component={SigninScreen} />
    </StackAuth.Navigator>
  );
}

function Home() {
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: () => (<MaterialCommunityIcons name="home" style={styles.icons} />) }}
      />
      <MainTab.Screen
        name="Balance"
        component={BalanceScreen}
        options={{ tabBarIcon: () => (<MaterialIcons name="attach-money" style={styles.icons} />) }}
      />
      <MainTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarIcon: () => (<Ionicons name="md-settings" style={styles.icons} />) }}
      />
      <MainTab.Screen
        name="Scan"
        component={ScanScreen}
        options={{ tabBarIcon: () => (<MaterialCommunityIcons name="qrcode-scan" style={styles.icons} />) }}
      />
    </MainTab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="ResolveAuth" component={ResolveAuthScreen} /> */}
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () =>{
  return(
    <TransactionProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </TransactionProvider>
  );
};

const styles = StyleSheet.create({
  icons: {
    fontSize: 25,
    alignSelf: 'center',
    margin: 5,
  },
});
