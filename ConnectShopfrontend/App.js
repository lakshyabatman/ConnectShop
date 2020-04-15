/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {useEffect} from 'react';
import FadeInView from './components/AnimatedFragment'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Animated
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import GetStarted from './screens/GetStarted'
import Login from './screens/Login'
import Screen from './screens/Signup'
import Signup from './screens/Signup';
const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  },[])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrapper}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Get Started" component={GetStarted} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Login" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>  
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper : {
    height:'100%',
    display:'flex',
    flexDirection:'column',
  }
});

export default App;
