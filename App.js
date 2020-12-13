// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CameraApp from './src/component/CameraApp'
import Mapcomp from './src/component/Mapcomp'
 
export default function App() {
  return (
      // <CameraApp/>
      <Mapcomp />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
