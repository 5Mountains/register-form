import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackNavigatorParamList} from '../types/navigation';

import {SignInScreen, SignUpScreen, ForgotPasswordScreen} from '../screens';
import {ConfirmEmailScreen} from '../screens/Auth/ConfirmEmailScreen';

const Stack = createNativeStackNavigator<AuthStackNavigatorParamList>();

export const AuthStack = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
    </Stack.Navigator>
  );
};
