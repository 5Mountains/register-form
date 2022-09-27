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
  containerStyle,
  textStyle,
}: ICustomButton): JSX.Element => (
  <Pressable
    {...{disabled, onPress}}
    style={[
      styles.container,
      styles[`container_${type}`],
      !!bgColor && {backgroundColor: bgColor},
      disabled && {backgroundColor: colors.lightgrey},
      containerStyle && containerStyle,
    ]}>
    <Text
      style={[
        styles.text,
        styles[`text_${type}`],
        !!fgColor && {color: fgColor},
        disabled && {color: colors.black},
        textStyle && textStyle,
      ]}>
      {text}
    </Text>
  </Pressable>
);
