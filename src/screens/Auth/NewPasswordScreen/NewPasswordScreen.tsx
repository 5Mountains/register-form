import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Text, Pressable, Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {CustomButton} from '../../../components/CustomButton';
import {FormInput} from '../../../components/FormInput';
import {NewPasswordNavigationProp} from '../../../types/navigation';

import {styles} from './styles';
import {
  NewPasswordData,
  PassedProps,
  ValuePassedProps,
  ValueType,
} from './types';
import {NewPasswordSchema} from './validations';

export const NewPasswordScreen = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [passed, setPassed] = useState<PassedProps>({
    password: false,
    confirmPassword: false,
  });

  const {navigate} = useNavigation<NewPasswordNavigationProp>();
  const {
    handleSubmit,
    control,
    register,
    reset,
    watch,
    formState: {errors, isValid},
  } = useForm<NewPasswordData>({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: yupResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const {password, confirmPassword} = watch();

  const passwordError = errors?.password?.message;
  const confirmPasswordError = errors?.confirmPassword?.message;

  const disabled = Object.entries(errors).length > 0 || !isValid;

  const onSendPressed = async (data: NewPasswordData) => {
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

  const onBackToSignInPressed = () => {
    navigate('SignIn');
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
      isPassed: passed.password,
      passedValue: password,
      passedError: passwordError,
      valueType: ValueType.password,
    });
  }, [password, passwordError, passed.password, setValuePassed]);

  useEffect(() => {
    setValuePassed({
      isPassed: passed.confirmPassword,
      passedValue: confirmPassword,
      passedError: confirmPasswordError,
      valueType: ValueType.confirmPassword,
    });
  }, [
    confirmPassword,
    confirmPasswordError,
    passed.confirmPassword,
    setValuePassed,
  ]);

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      enableResetScrollToCoords={false}
      keyboardShouldPersistTaps="always"
      keyboardDismissMode="interactive">
      <Pressable onPress={Keyboard.dismiss} style={styles.root}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Enter Your Details to Restore Password
        </Text>

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
          text={loading ? 'Loading..' : 'Send'}
          onPress={handleSubmit(onSendPressed)}
          disabled={disabled}
          containerStyle={styles.mainButton}
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onBackToSignInPressed}
          type="TERTIARY"
          containerStyle={styles.bottomButton}
        />
      </Pressable>
    </KeyboardAwareScrollView>
  );
};
