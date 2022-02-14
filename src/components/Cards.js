import React from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

DATA = [
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

const Cards = () => {
  const renderItem = ({ item }) => (
    <View style={styles.forEveryCard}>
      <Text style={styles.textCard}>{item.city}</Text>
      <Image source={item.image} style={styles.img} />
      <Text style={styles.textCard}>{item.temperature}</Text>
    </View>
  );

  return (
    <View style={styles.forMainView}>
      {DATA.length > 0 ? (
        <FlatList
          numColumns={'2'}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={({ id }) => id}
        />
      ) : (
        <Text style={styles.forEmptyCardText}>fgfgffgf</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  forMainView: {
    flex: 1,
  },
  forEveryCard: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    minHeight: 200,
    minWidth: 150,
    margin: 10,
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
  },
});

export default Cards;
