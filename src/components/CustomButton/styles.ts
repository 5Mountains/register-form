import {weight} from '../../theme/fonts';
import {colors} from '../../theme/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 5,
    padding: 15,

    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  container_PRIMARY: {
    backgroundColor: colors.primary,
  },
  container_TERTIARY: {
    borderColor: colors.lightgrey,
  },
  container_SECONDARY: {
    borderColor: colors.primary,
  },
  text: {
    fontWeight: weight.bold,
  },
  text_PRIMARY: {
    color: colors.white,
  },
  text_TERTIARY: {
    color: colors.grey,
  },
  text_SECONDARY: {
    color: colors.primary,
  },
});
