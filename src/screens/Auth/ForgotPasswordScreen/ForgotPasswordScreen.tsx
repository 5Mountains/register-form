import React, {useEffect, useState} from 'react';
import {Text, Pressable, Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import {CustomButton} from '../../../components/CustomButton';
import {FormInput} from '../../../components/FormInput';

import {styles} from './styles';
import {ForgotPasswordData, PassedValue} from './types';
import {ForgotPasswordNavigationProp} from '../../../types/navigation';
import {ForgotPasswordSchema} from './validation';

export const ForgotPasswordScreen = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [passed, setPassed] = useState<PassedValue>({email: false});

  const {navigate} = useNavigation<ForgotPasswordNavigationProp>();
  const {
    handleSubmit,
    control,
    register,
    reset,
    watch,
    formState: {errors, isValid},
  } = useForm<ForgotPasswordData>({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues: {email: ''},
  });

  const {email} = watch();

  const emailError = errors?.email?.message;

  const disabled = Object.entries(errors).length > 0 || !isValid;

  const onSendPressed = async (data: ForgotPasswordData) => {
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

  const onBackToSignInPressed = () => navigate('SignIn');

  useEffect(() => {
    if (email.length > 0 && !emailError) {
      passed.email !== true && setPassed({email: true});
    } else {
      passed.email !== false && setPassed({email: false});
    }
  }, [email.length, emailError, passed.email]);

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
          name="email"
          register={register}
          control={control}
          error={emailError}
          title="Email"
          placeholder="Type your Email"
          iconName="email-outline"
          passed={passed.email}
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
