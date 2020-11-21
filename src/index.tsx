import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Pages from './enum/Pages';
import Cphilipse from './pages/Cphilipse';
import Settings from './pages/Settings';
import ProjectDetails from './pages/ProjectDetails';

const Stack = createStackNavigator();

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar translucent={true} backgroundColor={'transparent'} />
          <Stack.Navigator>
            <Stack.Screen
              name={Pages.HOME}
              component={Home}
              options={{
                title: Pages.HOME,
                headerShown: false,
                cardStyle: {backgroundColor: 'black'},
                animationEnabled: false,
              }}
            />
            <Stack.Screen
              name={Pages.SETTINGS}
              component={Settings}
              options={{
                title: Pages.SETTINGS,
                headerShown: false,
                cardStyle: {backgroundColor: 'black'},
                // https://reactnavigation.org/docs/themes/
                animationEnabled: false, // TODO: Look into: without this, there is a white flash when navigating between pages.
              }}
            />
            <Stack.Screen
              name={Pages.CPHILIPSE}
              component={Cphilipse}
              options={{
                title: Pages.CPHILIPSE,
                headerShown: false,
                cardStyle: {backgroundColor: 'black'},
                animationEnabled: false,
              }}
            />
            <Stack.Screen
              name={Pages.PROJECT_DETAILS}
              component={ProjectDetails}
              options={{
                title: Pages.PROJECT_DETAILS,
                headerShown: false,
                cardStyle: {backgroundColor: 'black'},
                animationEnabled: false,
              }}
            />
            <Stack.Screen
              name={Pages.PORTFOLIO}
              component={Portfolio}
              options={{title: Pages.PORTFOLIO, headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
