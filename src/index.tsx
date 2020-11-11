import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Pages from './enum/Pages';
import Cphilipse from './pages/Cphilipse';
import Settings from './pages/Settings';

const Stack = createStackNavigator();

// TODO: After this page, focus on the settings page. Locales (en (default), nl), darkmode and notifications perhaps.
export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <Stack.Navigator>
          <Stack.Screen
            name={Pages.SETTINGS}
            component={Settings}
            options={{title: Pages.SETTINGS, headerShown: false}}
          />
          <Stack.Screen
            name={Pages.CPHILIPSE}
            component={Cphilipse}
            options={{title: Pages.CPHILIPSE, headerShown: false}}
          />
          <Stack.Screen
            name={Pages.HOME}
            component={Home}
            options={{title: Pages.HOME, headerShown: false}}
          />
          <Stack.Screen
            name={Pages.PORTFOLIO}
            component={Portfolio}
            options={{title: Pages.PORTFOLIO}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
