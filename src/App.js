import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Provider } from 'react-redux';
import { store } from './redux';
import {BackHandler} from 'react-native';
import Tips from 'react-native-root-tips';

let backHandlerClickCount = 0;
const App = () => {
  useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', backButtonHandler);
      return () => {
          BackHandler.removeEventListener('hardwareBackPress', backButtonHandler);
      };
  }, []);
  const backButtonHandler = () => {
    const shortToast = message => {
      Tips.show(message, {
        duration: 1000,
        position: Tips.positions.BOTTOM,
        shadow: false,
        animation: true,
        hideOnPress: true,
        delay: 0
      });
    }
    backHandlerClickCount += 1;
    if ((backHandlerClickCount < 2)) {
        shortToast('Tekan sekali lagi untuk keluar');
    } else {
        BackHandler.exitApp();
    }
    setTimeout(() => {
        backHandlerClickCount = 0;
    }, 1000);
    return true;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
