import React from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

DATA2 = [
  {
    id: '1',
    city: 'GOMEL',
    image: require('../../assets/icon.png'),
    temperature: '-30',
  },
  {
    id: '2',
    city: 'GOMEL',
    image: require('../img/icon.png'),
    temperature: '-30',
  },
  {
    id: '3',
    city: 'GOMEL',
    image: require('../img/icon.png'),
    temperature: '-30',
  },
  {
    id: '4',
    city: 'GOMEL',
    image: require('../img/icon.png'),
    temperature: '-30',
  },
  {
    id: '5',
    city: 'GOMEL',
    image: require('../img/icon.png'),
    temperature: '-35',
  },
  {
    id: '6',
    city: 'GOMEL',
    image: require('../img/icon.png'),
    temperature: '-30',
  },
  {
    id: '7',
    city: 'GOME',
    image: require('../img/icon.png'),
    temperature: '-28',
  },

  {
    id: '8',
    city: 'GOMEL',
    image: require('../img/icon.png'),
    temperature: '-30',
  },
];

const Cards2 = () => {
  const renderItem = ({ item }) => (
    <View style={styles.forEveryCard}>
      <View style={styles.forCityandImage}>
        <Text style={styles.textCard}>{item.city}</Text>
        <Image source={item.image} style={styles.img} />
      </View>
      <View style={styles.forTemperatura}>
        <Text style={styles.textCard}>{item.temperature}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.forMainView}>
      {DATA2.length > 0 ? (
        <FlatList
          data={DATA2}
          renderItem={renderItem}
          keyExtractor={({ id }) => id}
        />
      ) : (
        <View style={styles.forEmtyData}>
          <FontAwesome5 name="sad-cry" size={42} color="black" />
          <Text style={styles.forEmptyCardText}>No data for City</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  forMainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forEveryCard: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    minHeight: 200,
    minWidth: 250,
    padding: 10,
  },
  forCityandImage: {},
  forTemperatura: {
    fontSize: 12,
  },
  textCard: {
    fontSize: 7,
    color: 'blue',
    borderWidth: 1,
    borderColor: 'green',
    height: 70,
    width: 50,
  },
  img: {
    width: 70,
    height: 70,
    borderColor: 'red',
    borderWidth: 2,
  },
  forEmptyCardText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
  },
  forEmtyData: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cards2;
