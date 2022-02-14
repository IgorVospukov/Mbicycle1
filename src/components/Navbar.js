import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';

const Navbar = () => {
  const [nav, setNav] = useState('Tap here');

  return (
    <View style={styles.forNavbar}>
      <Text style={styles.text}>{nav}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  forNavbar: {
    flexDirection: 'row',
    height: 50,
    width: 340,
    alignSelf: 'center',
    marginTop: 40,
    borderWidth: 1,
    borderColor: '#3949ab',
  },
  text: {
    color: 'black',
  },
});

export default Navbar;
