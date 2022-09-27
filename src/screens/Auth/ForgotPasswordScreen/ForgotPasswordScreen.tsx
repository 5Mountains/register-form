import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import {styles} from './styles';

export const ForgotPasswordScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Enter Your Details to Restore Password
        </Text>
      </View>
    </ScrollView>
  );
};
