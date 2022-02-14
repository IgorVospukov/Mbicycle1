import React from 'react';
import moment from 'moment';
import { View, Text, Image, StyleSheet } from 'react-native';

DATA = {
  id: '1',
  city: 'GOMEL',
  date: moment().format(),
  image: require('../../assets/icon.png'),
  temperature: '-30',
};

const Page4 = () => {
  return (
    <View style={styles.forMainCard}>
      <View style={styles.forCity}>
        <Text style={styles.textCard}>{DATA.city}</Text>
      </View>
      <View style={styles.forOther}>
        <Text style={styles.textCard}>{DATA.date}</Text>
        <Image source={DATA.image} style={styles.img} />
        <Text style={styles.textCard}>{DATA.temperature}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forCity: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  forOther: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  forMainCard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    minWidth: '100%',
  },
  textCard: {
    fontSize: 7,
    color: 'blue',
    borderWidth: 1,
    borderColor: 'green',
    height: 100,
    width: 100,
  },
  img: {
    width: 100,
    height: 100,
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default Page4;
