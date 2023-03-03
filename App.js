import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import CalculadoraScreen from './src/screen/CalculadoraScreen';
import { styles } from './src/theme/appTheme';

export default function App() {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar hidden backgroundColor='black' translucent/>
      <CalculadoraScreen />
    </SafeAreaView>
  )
}