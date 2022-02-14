import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Page1 = () => {
  return (
    <View style={styles.forPage1}>
      <View style={styles.forIonics}>
        <Ionicons name="ios-logo-reddit" size={80} color="black" />
      </View>
      <Text style={styles.text}>Weather App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  forPage1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  forIonics: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    color: 'blue',
  },
});

export default Page1;
