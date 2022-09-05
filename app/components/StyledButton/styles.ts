import {StyleSheet} from 'react-native';
import {Colors} from '../../enums/colors';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: Colors.GREEN_COLOR,
    borderRadius: 30,
  },

  labelStyle: {
    textTransform: 'none',
    paddingVertical: 5,
    color: 'black',
  },
});
