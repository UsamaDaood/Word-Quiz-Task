import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppNavigator from './navigation/appNavigator';
import {Provider} from 'react-redux';
import {createStore} from './config/store';
import {PersistGate} from 'redux-persist/integration/react';
import {LogBox} from 'react-native';
import Loader from './common/loader';
import Toast from 'react-native-toast-message';
import {persistStore} from 'redux-persist';

export const {store} = createStore();
let persistor = persistStore(store);
function App() {
  LogBox.ignoreLogs(['Warning: ...']); //Hide warnings

  LogBox.ignoreAllLogs(); //Hide all warning notifications on front-end
  return (
    <SafeAreaProvider>
      <SafeAreaView
        edges={['top']}
        style={{
          flex: 1,
        }}>
        <NavigationContainer>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <AppNavigator />
              <Loader />
              <Toast position="top" topOffset={50} />
            </PersistGate>
          </Provider>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
