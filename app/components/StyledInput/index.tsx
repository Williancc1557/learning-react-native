import {StyleProp, TextInput, ViewStyle} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Colors} from '../../enums/colors';

interface StyledInputParams {
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
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
      onChangeText={value => params.setValue(value)}
      style={[styles.input, params.style]}
      secureTextEntry={params.secureTextEntry}
    />
  );
};

export default StyledInput;
