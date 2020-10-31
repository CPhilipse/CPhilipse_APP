import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Pages from './enum/Pages';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Pages.HOME}
          component={Home}
          options={{title: Pages.HOME}}
        />
        <Stack.Screen
          name={Pages.PORTFOLIO}
          component={Portfolio}
          options={{title: Pages.PORTFOLIO}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
