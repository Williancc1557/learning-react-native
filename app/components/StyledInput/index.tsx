import {StyleProp, TextInput, ViewStyle} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Colors} from '../../enums/colors';

interface StyledInputParams {
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
  style?: StyleProp<ViewStyle>;
  placeholderColor?: string;
  secureTextEntry?: boolean;
}

const StyledInput = (params: StyledInputParams) => {
  return (
    <TextInput
      placeholder={params.placeholder}
      placeholderTextColor={params.placeholderColor || Colors.FONT_COLOR}
      value={params.value}
      onChangeText={params.onChangeText}
      style={[styles.input, params.style]}
      secureTextEntry={params.secureTextEntry}
    />
  );
};

export default StyledInput;
