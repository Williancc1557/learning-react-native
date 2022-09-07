import {StyleSheet} from 'react-native';
import {Colors} from '../../enums/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: Colors.SECOND_COLOR,
    borderRadius: 25,
    alignItems: 'center',
  },

  input: {
    width: '87%',
  },

  icon: {
    alignItems: 'flex-start',
  },
});
