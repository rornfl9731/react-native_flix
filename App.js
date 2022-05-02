import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons'
import React from 'react';
import Tabs from './navigation/Tabs';
import Stack from './navigation/Stack';
import { Asset ,useAssets} from 'expo-asset';
import { StyleSheet, Text, View,Image,ColorSchemeName,useColorScheme } from 'react-native';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer , DarkTheme,DefaultTheme} from '@react-navigation/native';

const loadFonts = (fonts) => fonts.map(font=>Font.loadAsync(font));


export default function App() {

  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font]);
    await Promise.all([...fonts]);
    

  }
 
  const isDark  = useColorScheme() === 'dark';
  if(!ready){
  return (
    <AppLoading
      startAsync={startLoading}
      onFinish={onFinish}
      onError={console.warn}
    />
  );
  }
  return( <NavigationContainer>
    <Tabs />
  </NavigationContainer>
  );
  
}




