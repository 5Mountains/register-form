import {StyleSheet} from 'react-native';
import {size, weight} from '../../../theme/fonts';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  title: {
    marginTop: 50,
    fontSize: size.xlg! * 2,
    fontWeight: weight.boldest,
    alignSelf: 'flex-start',
  },
  subtitle: {
    marginVertical: 30,
    fontSize: size.lg,
    fontWeight: weight.semi,
    fontStyle: 'italic',
    alignSelf: 'flex-start',
  },
  mainButton: {
    marginTop: 20,
    marginBottom: 30,
  },
  bottomButton: {
    marginBottom: 20,
  },
});
