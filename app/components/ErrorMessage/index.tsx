import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import StyledText from '../StyledText';
import {styles} from './styles';

interface ErrorMessageParams {
  children: any;
  style?: StyleProp<TextStyle>;
  setShow: boolean;
}

const ErrorMessage = (params: ErrorMessageParams) => {
  return (
    <StyledText style={[styles.message, params.style]}>
      {params.setShow ? params.children : ''}
    </StyledText>
  );
};

export default ErrorMessage;
