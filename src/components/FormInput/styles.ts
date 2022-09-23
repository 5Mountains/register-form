import {weight} from './../../theme/fonts';
import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {IStylesProps} from './types';

const {white, accent, primary, positive, lightgrey, black} = colors;

export const styles = ({err, focused, password, passed}: IStylesProps) =>
  StyleSheet.create({
    root: {
      backgroundColor: white,
      flexDirection: 'row',
      alignItems: 'center',

      borderWidth: 1,
      borderColor: err
        ? accent
        : passed
        ? positive
        : focused
        ? primary
        : lightgrey,
      borderRadius: 5,

      marginTop: 5,
      marginBottom: 15,
    },
    titleContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      alignItems: 'center',
      marginBottom: 5,
    },
    title: {
      alignSelf: 'flex-start',
      fontWeight: weight.semi,
      color: err ? accent : passed ? positive : black,
      marginLeft: 5,
    },
    input: {
      flex: 1,
      paddingLeft: 35,
      paddingRight: password ? 35 : 10,
      paddingVertical: 15,
    },
    iconLeft: {
      position: 'absolute',
      padding: 10,
      left: 0,
    },
    iconRight: {
      position: 'absolute',
      padding: 10,
      right: 0,
      zIndex: 1,
    },
    errorContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      alignItems: 'center',
      marginTop: -5,
      marginBottom: 15,
      color: primary,
    },
    errorMessage: {
      color: accent,
    },
  });
