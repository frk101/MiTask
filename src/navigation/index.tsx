import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Screens from '../screens';
// import AuthStack from './auth-stack';
// import BottomStack from './bottom-stack';
import Screens from '@screens';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="BottomStack" component={BottomStack} /> */}
      <Stack.Screen name="Loading" component={Screens.LoadingScreen} />
      {/* <Stack.Screen name="OnBoarding" component={Screens.OnboardingScreen} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="BottomStack" component={BottomStack} /> */}
    </Stack.Navigator>
  );
};
export default Navigator;
