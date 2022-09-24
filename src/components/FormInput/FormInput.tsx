import React, {useMemo, useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Controller, FieldValues} from 'react-hook-form';

import {IFormInputProps} from './types';

import {styles} from './styles';
import {colors} from '../../theme/colors';

export const FormInput = <ContentData extends FieldValues>({
  control,
  name,
  placeholder = '',
  password = false,
  title,
  register,
  error,
  iconName,
  passed,
}: IFormInputProps<ContentData>) => {
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(password);

  const handleOnFocus = () => setFocused(true);
  const handleOnBlur = () => setFocused(false);
  const handleIconPress = () => setVisible(val => !val);

  const {accent, positive} = colors;

  const err = useMemo(() => !!error, [error]);

  return (
    <Controller
      {...{name, control}}
      render={({field: {value, onChange}}) => {
        return (
          <>
            {!!title && (
              <View style={styles({}).titleContainer}>
                {passed && (
                  <Icon name={'check-bold'} size={15} color={positive} />
                )}
                <Text style={styles({err, passed}).title}>{title}:</Text>
              </View>
            )}
            <View style={styles({err, focused, passed}).root}>
              {iconName && (
                <Icon name={iconName} size={20} style={styles({}).iconLeft} />
              )}
              <TextInput
                {...register(name)}
                {...{value, placeholder}}
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
                onChangeText={onChange}
                secureTextEntry={visible}
                style={styles({password}).input}
              />
              {password && (
                <Pressable
                  onPress={handleIconPress}
                  style={styles({}).iconRight}>
                  <Icon
                    name={visible ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                  />
                </Pressable>
              )}
            </View>
            {error && (
              <View style={styles({}).errorContainer}>
                <Icon name={'exclamation-thick'} size={15} color={accent} />
                <Text style={styles({}).errorMessage}>{error || 'Error'}</Text>
              </View>
            )}
          </>
        );
      }}
    />
  );
};
