import {TextStyle} from 'react-native';

export const size: {[key: string]: TextStyle['fontSize']} = {
  xs: 10,
  s: 12,
  default: 14,
  md: 16,
  lg: 20,
  xlg: 24,
};

export const weight: {[key: string]: TextStyle['fontWeight']} = {
  boldest: '900',
  bold: '700',
  semi: '600',
  normal: '400',
  thin: '200',
};
