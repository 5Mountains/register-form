import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AuthStack} from './AuthStack';
import {HomeStack} from './HomeStack';

export const Navigation = (): JSX.Element => {
  const [token] = useState(false);

  return (
    <NavigationContainer>
      {token ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
