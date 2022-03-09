import React from 'react';
import moment from 'moment';
import { View, Text, Image, StyleSheet } from 'react-native';

const Page4 = ({ route }) => {
  const nameCity = route.params.nameCity;

  return (
    <View style={styles.forMainCard}>
      <View style={styles.forCity}>
        <Text style={styles.textCardCity}>{nameCity.name}</Text>
      </View>
      <View style={styles.forOther}>
        <Text style={styles.textCard}>{moment().format('MMM Do YY')}</Text>
        <Image
          source={{
            uri: `http://openweathermap.org/img/w/${nameCity.weather[0].icon}.png`,
          }}
          style={styles.img}
        />

        <Text style={styles.textCard}>{nameCity.main.temp}&#176;C</Text>
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
    alignItems: 'center',
    minWidth: '100%',
  },
  textCard: {
    fontSize: 20,
    color: 'black',
    height: 25,
    width: 100,
    textAlign: 'center',
  },
  textCardCity: {
    fontSize: 20,
    color: 'black',
    height: 25,
    width: 100,
    textAlign: 'center',
    marginBottom: 250,
    marginTop: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderWidth: 2,
    marginBottom: 30,
    marginTop: 30,
  },
});

export default Page4;
