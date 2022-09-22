import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackNavigatorParamList} from '../types/navigation';

import {HomeScreen} from '../screens/HomeScreen';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

export const HomeStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
