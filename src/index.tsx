import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import {store, persistor} from './store';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Pages from './enum/Pages';
import Cphilipse from './pages/Cphilipse';

const Stack = createStackNavigator();

export default () => {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <Stack.Navigator>
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
    //</PersistGate>
    //</Provider>
  );
};
