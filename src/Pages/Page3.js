import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cards2 from '../components/Cards2';
import Navbar from '../components/Navbar';

const Page3 = () => {
  return (
    <View style={styles.containerForPage2}>
      <Navbar></Navbar>
      <Cards2></Cards2>
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

export default Page3;
