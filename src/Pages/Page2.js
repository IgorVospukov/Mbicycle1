import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';

const Page2 = () => {
  return (
    <View style={styles.containerForPage2}>
      <Navbar></Navbar>
      <Cards></Cards>
    </View>
  );
};

const styles = StyleSheet.create({
  containerForPage2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Page2;
