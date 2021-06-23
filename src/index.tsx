import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {Platform, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {
  createSharedElementStackNavigator,
  SharedElementConfig,
} from 'react-navigation-shared-element';
import {store, persistor} from './store';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Pages from './enum/Pages';
import Cphilipse from './pages/Cphilipse';
import Settings from './pages/Settings';
import ProjectDetails from './pages/ProjectDetails';
import EvidenceForJesus from './pages/EvidenceForJesus';
import SharedElement from './pages/SharedElement';
import SharedElementDetails from './pages/SharedElementDetails';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {enableScreens} from 'react-native-screens';
enableScreens();
// const Stack = createStackNavigator();
// @ts-ignore
const Stack = createNativeStackNavigator();
const SharedStack = createSharedElementStackNavigator();

const options = {
  title: Pages.EVIDENCE_FOR_JESUS,
  headerBackTitleVisible: false,

  headerShown: false,
  animationEnabled: true,
  gestureEnabled: Platform.OS === 'android',
  transitionConfig: () => ({
    containerStyle: {
      backgroundColor: '#000',
    },
  }),
  cardStyle: {
    backgroundColor: 'transparent',
    opacity: 1,
  },
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 250,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 250,
      },
    },
  },
  gestureDirection: 'vertical',
  gestureVelocityImpact: 0.5,
  cardStyle: {backgroundColor: 'transparent'},
  cardOverlayEnabled: true,
  gestureResponseDistance: {
    vertical: 100,
  },
};

//     {
//   cardStyleInterpolator: ({current: {progress}}) => {
//     return {
//       cardStyle: {
//         opacity: progress,
//       },
//     };
//   },
// };

function SharedElementPage() {
  return (
    <SharedStack.Navigator>
      <SharedStack.Screen
        name={Pages.SHARED_ELEMENT}
        component={SharedElement}
        options={() => options}
      />
      <SharedStack.Screen
        name={Pages.SHARED_ELEMENT_DETAILS}
        component={SharedElementDetails}
        options={() => options}
        sharedElementsConfig={(route, _, showing) => {
          const {item} = route.params;
          // only do shared element transition when a new screen is shown.
          // Otherwise the image will stick on the page (BUG).
          // https://github.com/IjzerenHein/react-navigation-shared-element/issues/72
          // https://blog.logrocket.com/how-to-use-shared-element-transition-with-react-navigation-v5/
          if (showing) {
            return [
              {
                id: `item.${item.id}.image_url`,
                animation: 'fade',
              },
            ];
          } else {
            return [];
          }
        }}
      />
    </SharedStack.Navigator>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar translucent={true} backgroundColor={'transparent'} />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              stackAnimation: 'fade',
            }}>
            <Stack.Screen
              name={Pages.HOME}
              component={Home}
              options={{
                title: Pages.HOME,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Pages.SETTINGS}
              component={Settings}
              options={{
                title: Pages.SETTINGS,
                headerShown: false,
                // https://reactnavigation.org/docs/themes/
              }}
            />
            <Stack.Screen
              name={Pages.CPHILIPSE}
              component={Cphilipse}
              options={{
                title: Pages.CPHILIPSE,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Pages.PROJECT_DETAILS}
              component={ProjectDetails}
              options={{
                title: Pages.PROJECT_DETAILS,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Pages.PORTFOLIO}
              component={Portfolio}
              options={{title: Pages.PORTFOLIO, headerShown: false}}
            />
            <Stack.Screen
              name={Pages.EVIDENCE_FOR_JESUS}
              component={EvidenceForJesus}
              options={{title: Pages.EVIDENCE_FOR_JESUS, headerShown: false}}
            />
            <Stack.Screen
              name={Pages.SHARED_ELEMENT_PAGE}
              component={SharedElementPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
