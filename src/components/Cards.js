import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getDataWeatherforSingleCity } from '../asyncActions/getDataforSingleCity';

const Cards = ({ onPage4 }) => {
  const Data = useSelector((state) => state.getWeather.data);
  const data = Data.flat();
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View style={styles.forEveryCard}>
      <Text style={styles.textCard} onPress={onPage4}>
        {item.data.timezone}
      </Text>
      <Image
        source={{
          uri: `http://openweathermap.org/img/w/${item.data.current.weather[0].icon}.png`,
        }}
        style={styles.img}
      />
      <Text style={styles.textCardTemp}>{item.data.current.temp}&#176;C</Text>
    </View>
  );
  const renderItem2 = ({ item }) => (
    <View style={styles.forEveryCard2}>
      <View style={styles.forWrapper2}>
        <Text style={styles.textCard2} onPress={onPage4}>
          {item.data.timezone}
        </Text>
        <Text style={styles.textCard2Temp2}>
          {item.data.current.temp}&#176;C
        </Text>
      </View>
      <Image
        source={{
          uri: `http://openweathermap.org/img/w/${item.data.current.weather[0].icon}.png`,
        }}
        style={styles.img2}
      />
    </View>
  );

  return (
    <View style={styles.forMainView}>
      {data.length == 0 ? (
        <View style={styles.forEmtyData}>
          <FontAwesome5 name="sad-cry" size={42} color="black" />
          <Text style={styles.forEmptyCardText}>No data for City</Text>
        </View>
      ) : data.length < 5 && data.length != 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem2}
          keyExtractor={(item, index) => index}
        />
      ) : (
        <FlatList
          numColumns={2}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  forMainView: {
    flex: 1,
  },
  forWrapper2: {
    flexDirection: 'column',
  },
  forEveryCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    minHeight: 150,
    minWidth: 150,
    margin: 10,
  },
  textCard: {
    fontSize: 14,
    color: 'black',
    height: 25,
    textAlign: 'center',
    alignContent: 'flex-end',
  },
  textCardTemp: {
    fontSize: 14,
    color: 'black',
    height: 25,
    textAlign: 'center',
  },
  img: {
    width: 70,
    height: 70,
  },
  forEmptyCardText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  forEmtyData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forEveryCard2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 100,
    minWidth: '100%',
    padding: 10,
  },
  textCard2: {
    fontSize: 14,
    color: 'blue',
    height: 25,
    textAlign: 'center',
  },
  textCard2Temp2: {
    fontSize: 14,
    color: 'blue',
    alignContent: 'flex-start',
    height: 25,
  },
  img2: {
    width: 70,
    height: 70,
  },
});

export default Cards;
