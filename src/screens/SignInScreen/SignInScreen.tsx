import React, {useCallback, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {View, Text, ScrollView} from 'react-native';
import {CustomButton} from '../../components/CustomButton';
import {FormInput} from '../../components/FormInput';

import {styles} from './styles';
import {SignInData, ValuePassedProps, ValueType} from './types';

import {yupResolver} from '@hookform/resolvers/yup';
import {SignInSchema} from './validation';

export const SignInScreen = () => {
  const [loading, setLoading] = useState(false);
  const [passed, setPassed] = useState({
    email: false,
    password: false,
  });

  const {
    handleSubmit,
    control,
    register,
    reset,
    watch,
    formState: {errors, isValid},
  } = useForm<SignInData>({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: yupResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const emailError = errors?.email?.message;
  const passwordError = errors?.password?.message;

  const {email, password} = watch();

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
      isPassed: passed.password,
      passedValue: password,
      passedError: passwordError,
      valueType: ValueType.password,
    });
  }, [passed.password, password, passwordError, setValuePassed]);

  useEffect(() => {
    setValuePassed({
      isPassed: passed.email,
      passedValue: email,
      passedError: emailError,
      valueType: ValueType.email,
    });
  }, [email, emailError, passed.email, setValuePassed]);

  const disabled = Object.entries(errors).length > 0 || !isValid;

  const onSignInPressed = async (data: SignInData) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      console.log(data.email, data.password);
    } catch (error) {
      console.log('Ooopps', (error as Error).message);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Enter Your Details to Sign In</Text>

        <FormInput
          name="email"
          register={register}
          control={control}
          error={emailError}
          title="Email"
          placeholder="Type your Email"
          iconName="email-outline"
          passed={passed.email}
        />

        <FormInput
          name="password"
          register={register}
          control={control}
          error={passwordError}
          title="Password"
          placeholder="Type your Password"
          iconName="lock-outline"
          password
          passed={passed.password}
        />

        <CustomButton
          text={loading ? 'Loading..' : 'Sign In'}
          onPress={handleSubmit(onSignInPressed)}
          disabled={disabled}
        />
      </View>
    </ScrollView>
  );
};
