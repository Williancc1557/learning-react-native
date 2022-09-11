import React from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Button} from 'react-native-paper';
import {styles} from './styles';

interface StyledButtonParams {
  title?: string;
  style?: StyleProp<ViewStyle>;
  color?: string;
  labelStyle?: StyleProp<TextStyle>;
  onpress?: () => void;
  disabled?: boolean;
}

const StyledButton = (params: StyledButtonParams) => {
  return (
    <Button
      color={params.color || '#000000'}
      style={[styles.button, params.style]}
      labelStyle={[styles.labelStyle, params.labelStyle]}
      onPress={params.onpress}
      disabled={params.disabled}>
      {params.title || ''}
    </Button>
  );
};

export default StyledButton;
