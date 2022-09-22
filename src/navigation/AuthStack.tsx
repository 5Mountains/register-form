import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackNavigatorParamList} from '../types/navigation';

import {SignInScreen, SignUpScreen} from '../screens';

const Stack = createNativeStackNavigator<AuthStackNavigatorParamList>();

export const AuthStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};
