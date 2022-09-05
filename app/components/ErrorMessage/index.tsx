import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import StyledText from '../StyledText';
import {styles} from './styles';

interface ErrorMessageParams {
  message: string;
  style?: StyleProp<TextStyle>;
  setShow: boolean;
}

const ErrorMessage = (params: ErrorMessageParams) => {
  return (
    <StyledText style={[styles.message, params.style]}>
      {params.setShow ? params.message : ''}
    </StyledText>
  );
};

export default ErrorMessage;
