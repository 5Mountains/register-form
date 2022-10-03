import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AuthStackNavigatorParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  ConfirmEmail: {email?: string};
};

export type HomeStackNavigatorParamList = {
  Home: undefined;
};

export type SignInNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'SignIn'
>;

export type SignUpNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'SignUp'
>;

export type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'ForgotPassword'
>;

export type ConfirmEmailNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'ConfirmEmail'
>;

export type ConfirmEmailRouteProp = RouteProp<
  AuthStackNavigatorParamList,
  'ConfirmEmail'
>;
