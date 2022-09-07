import {StyleSheet} from 'react-native';
import {Colors} from '../../enums/colors';
import {screenHeight} from '../../helpers/screen';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
  },

  title: {
    marginTop: screenHeight * 0.1,
  },

  form: {
    marginTop: screenHeight * 0.02,
  },

  input: {
    marginTop: screenHeight * 0.04,
  },

  checkBox: {
    marginTop: screenHeight * 0.02,
    marginBottom: screenHeight * 0.02,
  },

  buttonLabel: {
    fontSize: 18,
  },

  button: {
    width: '100%',
  },

  errorMessage: {
    marginTop: screenHeight * 0.01,
    textAlign: 'center',
  },

  bottomContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexBasis: 'auto',
    flexGrow: 1,
    paddingBottom: screenHeight * 0.09,
  },

  haveAccountText: {
    textAlign: 'center',
  },

  link: {
    color: Colors.GREEN_COLOR,
  },
});
