import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {View, Text, ScrollView} from 'react-native';
import {SignInSchema} from '../SignInScreen/validation';

import {styles} from './styles';
import {SignUpData} from './types';

export const SignUpScreen = () => {
  const [loading, setLoading] = useState(false);
  const [passed, setPassed] = useState({
    email: false,
    nickname: false,
    phoneNumber: false,
    password: false,
    confirmPassword: false,
  });

  const {
    handleSubmit,
    control,
    register,
    reset,
    watch,
    formState: {errors, isValid},
  } = useForm<SignUpData>({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: yupResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const nicknameError = errors?.nickname?.message;
  const emailError = errors?.email?.message;
  const phoneNumberError = errors?.phoneNumber?.message;
  const passwordError = errors?.password?.message;
  const confrimPasswordError = errors?.confirmPassword?.message;

  const {nicknam, email, phoneNumber, password, confirmPassword} = watch();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Enter Your Details to Sign Up</Text>
      </View>
    </ScrollView>
  );
};
