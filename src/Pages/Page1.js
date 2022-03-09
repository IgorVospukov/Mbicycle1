import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { getDataWeather } from '../asyncActions/getDataWeather';

const Page1 = ({ navigation }) => {
  const dispatch = useDispatch();

  const callPageandDispatch = () => {
    const loadScreen = () => {
      navigation.navigate('Page2');
    };
    loadScreen();
    const loadDispatch = () => dispatch(getDataWeather());
    loadDispatch();
  };

  return (
    <View style={styles.forPage1}>
      <View style={styles.forIonics}>
        <Ionicons
          name="ios-logo-reddit"
          size={80}
          color="black"
          onPress={callPageandDispatch}
        />
      </View>
      <Text style={styles.text}>Weather App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  forPage1: {
    flex: 1,
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
