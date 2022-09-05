import {StyleSheet} from 'react-native';
import {Colors} from '../../enums/colors';
import {screenHeight} from '../../helpers/screen';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: Colors.GREEN_COLOR,
    borderRadius: 30,
  },

  labelStyle: {
    paddingVertical: screenHeight * 0.0127,
    textTransform: 'none',
    color: 'black',
  },
});
