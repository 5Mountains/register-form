import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AuthStackNavigatorParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export type HomeStackNavigatorParamList = {
  Home: undefined;
};

export type SignInNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'SignIn'
>;
