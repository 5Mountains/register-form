import React, {useCallback, useEffect, useState} from 'react';
import {Text, Keyboard, Pressable} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useNavigation, useRoute} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {CustomButton} from '../../../components/CustomButton';
import {FormInput} from '../../../components/FormInput';

import {styles} from './styles';
import {
  PassedValue,
  ConfirmEmailData,
  ValuePassedProps,
  ValueType,
} from './types';
import {SignInSchema} from './validation';
import {
  ConfirmEmailRouteProp,
  ConfirmEmailNavigationProp,
} from '../../../types/navigation';

export const ConfirmEmailScreen = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [passed, setPassed] = useState<PassedValue>({
    email: false,
    code: false,
  });

  const route = useRoute<ConfirmEmailRouteProp>();
  const {navigate} = useNavigation<ConfirmEmailNavigationProp>();
  const {
    handleSubmit,
    control,
    register,
    reset,
    watch,
    formState: {errors, isValid},
  } = useForm<ConfirmEmailData>({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: yupResolver(SignInSchema),
    defaultValues: {
      email: route.params.email,
      code: '',
    },
  });

  const {email, code} = watch();

  const emailError = errors?.email?.message;
  const codeError = errors?.code?.message;

  const disabled = Object.entries(errors).length > 0 || !isValid;

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

  const onConfirmPressed = async (data: ConfirmEmailData) => {
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

  const onResendCodePressed = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      console.log(email);
    } catch (error) {
      console.log('Ooopps', (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const onBackToSignInPressed = () => navigate('SignIn');

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
      isPassed: passed.code,
      passedValue: code,
      passedError: codeError,
      valueType: ValueType.code,
    });
  }, [code, codeError, passed.code, setValuePassed]);

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      enableResetScrollToCoords={false}
      keyboardShouldPersistTaps="always"
      keyboardDismissMode="interactive">
      <Pressable onPress={Keyboard.dismiss} style={styles.root}>
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
          name="code"
          register={register}
          control={control}
          error={codeError}
          title="Password"
          placeholder="Type your Code"
          iconName="lock-clock"
          password
          passed={passed.code}
        />

        <CustomButton
          text={loading ? 'Loading..' : 'Confirm'}
          onPress={handleSubmit(onConfirmPressed)}
          disabled={disabled}
          containerStyle={styles.mainButton}
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onBackToSignInPressed}
          type="SECONDARY"
        />
        <CustomButton
          text="Resend Code"
          onPress={onResendCodePressed}
          type="TERTIARY"
          containerStyle={styles.bottomButton}
        />
      </Pressable>
    </KeyboardAwareScrollView>
  );
};
