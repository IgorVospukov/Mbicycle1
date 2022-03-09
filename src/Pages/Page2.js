import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  Image,
} from 'react-native';
import Cards from '../components/Cards';
import { useSelector, useDispatch } from 'react-redux';
import { getDataWeatherforSingleCity } from '../asyncActions/getDataforSingleCity';

const Page2 = ({ navigation }) => {
  const [text, setText] = useState('');
  const data3 = useSelector((state) => state.getWeather2.data2);
  const dispatch = useDispatch();

  useEffect(() => {
    if (text.length >= 3) {
      setTimeout(() => dispatch(getDataWeatherforSingleCity(text)), 1000);
    } else {
      console.log('ne to');
    }
  }, [text]);

  const loadScreen4 = (item) => {
    navigation.navigate('Page4', {
      nameCity: item,
    });
  };

  const renderItemSingle = ({ item }) => (
    <View style={styles.forEveryCardSingle}>
      <View style={styles.forWrapperSingle}>
        <Text
          style={styles.textCardSingleCity}
          onPress={() => loadScreen4(item)}
        >
          {item.name}
        </Text>
        <Text style={styles.textCardSingle}>{item.main.temp}&#176;C</Text>
      </View>
      <Image
        source={{
          uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
        }}
        style={styles.imgSingle}
      />
    </View>
  );

  return (
    <View style={styles.containerForPage2}>
      <View style={styles.forNavbar}>
        <TextInput
          value={text}
          style={styles.text}
          onChangeText={setText}
          placeholder={'Search'}
        />
      </View>
      {!text ? (
        <Cards onPage4={loadScreen4}></Cards>
      ) : (
        <View>
          <FlatList
            data={data3}
            renderItem={renderItemSingle}
            keyExtractor={(item, index) => index}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerForPage2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  forNavbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    width: 340,
    alignSelf: 'center',

    borderWidth: 1,
    borderColor: '#3949ab',
    borderRadius: 5,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    width: 200,
  },
  forWrapperSingle: {
    flexDirection: 'column',
  },
  forEveryCardSingle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 100,
    minWidth: '100%',
    padding: 10,
  },
  textCardSingle: {
    fontSize: 14,
    color: 'black',
    height: 25,
  },
  textCardSingleCity: {
    fontSize: 14,
    color: 'black',
    height: 25,
  },
  imgSingle: {
    width: 70,
    height: 70,
  },
  forTextInput: {
    width: 200,
  },
});

export default Page2;
