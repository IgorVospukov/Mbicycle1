import React from 'react';
import Page1 from './src/Pages/Page1';
import Page2 from './src/Pages/Page2';
import Page3 from './src/Pages/Page3';
import Page4 from './src/Pages/Page4';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Page1"
          component={Page1}
          // options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
        <Stack.Screen name="Page4" component={Page4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
