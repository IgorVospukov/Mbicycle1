import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import Navigate from './src/Pages/Navigate';
// import Cards from './src/components/Cards';
// import { useState } from 'react';
// import Navbar from './src/components/Navbar';
// import Page1 from './src/Pages/Page1';
// import Page2 from './src/Pages/Page2';
// import Page3 from './src/Pages/Page3';
// import Page4 from './src/Pages/Page4';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Navbar title="ghjjfjfjf" /> */}
      {/* <Page1 /> */}
      {/* <Page2 /> */}
      {/* <Page3 /> */}
      {/* <Page4 /> */}
      <Navigate />
    </View>
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
