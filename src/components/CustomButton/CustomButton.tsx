import {Text, Pressable} from 'react-native';
import React from 'react';
import {ICustomButton} from './types';
import {styles} from './styles';
import {colors} from '../../theme/colors';

export const CustomButton = ({
  text = '',
  onPress = () => {},
  type = 'PRIMARY',
  bgColor,
  fgColor,
  disabled,
}: ICustomButton): JSX.Element => (
  <Pressable
    disabled={disabled}
    style={[
      styles.container,
      styles[`container_${type}`],
      !!bgColor && {backgroundColor: bgColor},
      disabled && {backgroundColor: colors.lightgrey},
    ]}
    onPress={onPress}>
    <Text
      style={[
        styles.text,
        styles[`text_${type}`],
        !!fgColor && {color: fgColor},
        disabled && {color: colors.black},
      ]}>
      {text}
    </Text>
  </Pressable>
);
