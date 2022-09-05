import {StyleSheet} from 'react-native';
import {Colors} from '../../enums/colors';
import {screenHeight} from '../../helpers/screen';

export const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: Colors.SECOND_COLOR,
    color: 'white',
    fontSize: 16,
    textDecoration: 'none',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: screenHeight * 0.018,
  },
});
