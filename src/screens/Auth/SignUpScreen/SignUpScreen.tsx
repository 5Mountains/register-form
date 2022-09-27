import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {CustomButton} from '../../../components/CustomButton';
import {FormInput} from '../../../components/FormInput';

import {styles} from './styles';
import {SignUpData, ValuePassedProps, ValueType} from './types';
import {SignUpSchema} from './validations';

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
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      email: '',
      nickname: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
  });

  const nicknameError = errors?.nickname?.message;
  const emailError = errors?.email?.message;
  const phoneNumberError = errors?.phoneNumber?.message;
  const passwordError = errors?.password?.message;
  const confirmPasswordError = errors?.confirmPassword?.message;

  const disabled = Object.entries(errors).length > 0 || !isValid;

  const {nickname, email, phoneNumber, password, confirmPassword} = watch();

  const onSignUpPressed = async (data: SignUpData) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      console.log(data);
    } catch (error) {
      console.log('Ooopps', (error as Error).message);
    } finally {
      setLoading(false);
      reset();
    }
  };

  const setValuePassed = useCallback(
    ({isPassed, passedValue, passedError, valueType}: ValuePassedProps) => {
      if (passedValue.length > 0 && !passedError) {
        isPassed !== true &&
          setPassed(prevState => ({
            ...prevState,
            [valueType]: true,
          }));
      } else {
        isPassed !== false &&
          setPassed(prevState => ({
            ...prevState,
            [valueType]: false,
          }));
      }
    },
    [],
  );

  useEffect(() => {
    setValuePassed({
      isPassed: passed.nickname,
      passedValue: nickname,
      passedError: nicknameError,
      valueType: ValueType.nickname,
    });
  }, [nickname, nicknameError, passed.nickname, setValuePassed]);

  useEffect(() => {
    setValuePassed({
      isPassed: passed.email,
      passedValue: email,
      passedError: emailError,
      valueType: ValueType.email,
    });
  }, [email, emailError, passed.email, setValuePassed]);

  useEffect(() => {
    setValuePassed({
      isPassed: passed.phoneNumber,
      passedValue: phoneNumber,
      passedError: phoneNumberError,
      valueType: ValueType.phoneNumber,
    });
  }, [phoneNumber, phoneNumberError, passed.phoneNumber, setValuePassed]);

  useEffect(() => {
    setValuePassed({
      isPassed: passed.password,
      passedValue: password,
      passedError: passwordError,
      valueType: ValueType.password,
    });
  }, [passed.password, password, passwordError, setValuePassed]);

  useEffect(() => {
    setValuePassed({
      isPassed: passed.confirmPassword,
      passedValue: confirmPassword,
      passedError: confirmPasswordError,
      valueType: ValueType.confirmPassword,
    });
  }, [
    passed.confirmPassword,
    confirmPassword,
    confirmPasswordError,
    setValuePassed,
  ]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Enter Your Details to Sign Up</Text>

        <FormInput
          name="nickname"
          {...{control, register}}
          error={nicknameError}
          title="Nickname"
          placeholder="Type your Nickname"
          iconName="account-outline"
          passed={passed.nickname}
        />
        <FormInput
          name="email"
          {...{control, register}}
          error={emailError}
          title="Email"
          placeholder="Type your Email"
          iconName="email-outline"
          passed={passed.email}
        />
        <FormInput
          name="phoneNumber"
          {...{control, register}}
          error={phoneNumberError}
          title="Phone number"
          placeholder="Type your PhoneNumber"
          iconName="phone-outline"
          passed={passed.phoneNumber}
        />
        <FormInput
          name="password"
          {...{control, register}}
          error={passwordError}
          title="Password"
          placeholder="Type your Password"
          iconName="lock-outline"
          password
          passed={passed.password}
        />
        <FormInput
          name="confirmPassword"
          {...{control, register}}
          error={confirmPasswordError}
          title="Confirm password"
          placeholder="Type again your password"
          iconName="lock-outline"
          password
          passed={passed.confirmPassword}
        />

        <CustomButton
          text={loading ? 'Loading..' : 'Sign Un'}
          onPress={handleSubmit(onSignUpPressed)}
          disabled={disabled}
        />
      </View>
    </ScrollView>
  );
};
