import Navigator from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import {store, persistor} from './src/business/store';
import {navigationRef} from './src/utils/navigation.util';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BootSplash from 'react-native-bootsplash';
import React = require('react');

const App: React.FC = () => {
  return (
    // <GestureHandlerRootView style={{flex: 1}}>
    //   <Provider store={store}>
    //     <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer
            ref={navigationRef}
            onReady={() => {
              BootSplash.hide();
            }}>
            <Navigator />
          </NavigationContainer>
    //     </PersistGate>
    //   </Provider>
    // </GestureHandlerRootView>
  );
};

export default App;
