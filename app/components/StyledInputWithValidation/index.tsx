import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {List} from 'react-native-paper';
import {Colors} from '../../enums/colors';
import StyledInput from '../StyledInput';
import {styles} from './styles';

interface StyledInputWithValidatorParams {
  validate: RegExp;
  style?: StyleProp<ViewStyle>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  placeholder?: string;
}

const StyledInputWithValidator = (params: StyledInputWithValidatorParams) => {
  const isValid = params.validate?.test(params.value);
  const icon = isValid ? 'check' : 'close';
  const color = isValid ? Colors.GREEN_COLOR : Colors.RED_COLOR;

  return (
    <View style={[styles.container, params.style]}>
      <StyledInput
        style={styles.input}
        onChangeText={user => params.setValue(user)}
        value={params.value}
        placeholder={params.placeholder}
      />
      <List.Icon icon={icon} color={color} style={styles.icon} />
    </View>
  );
};

export default StyledInputWithValidator;
