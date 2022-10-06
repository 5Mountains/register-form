import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Pressable, Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {CustomButton} from '../../../components/CustomButton';
import {NewPasswordNavigationProp} from '../../../types/navigation';

import {styles} from './styles';

export const NewPasswordScreen = () => {
  const {navigate} = useNavigation<NewPasswordNavigationProp>();

  const onBackToSignInPressed = () => {
    navigate('SignIn');
  };

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
