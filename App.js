import React from 'react';
import { StyleSheet } from 'react-native';
import Navigate from './src/Pages/Navigate';
import { Provider } from 'react-redux';
import { store } from './src/redux/index';
export default function App() {
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
