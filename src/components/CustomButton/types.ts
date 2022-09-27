import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ICustomButton {
  text?: string;
  onPress?: () => void;
  type?: 'PRIMARY' | 'TERTIARY' | 'SECONDARY';
  bgColor?: string;
  fgColor?: string;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
