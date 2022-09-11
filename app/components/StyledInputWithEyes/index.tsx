import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {IconButton} from 'react-native-paper';
import StyledInput from '../StyledInput';
import {styles} from './styles';

interface StyledInputWithEyesParams {
  eyes: boolean;
  setEyes: React.Dispatch<React.SetStateAction<boolean>>;
  style?: StyleProp<ViewStyle>;
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText?: (value: string) => void;
}

const StyledInputWithEyes = (params: StyledInputWithEyesParams) => {
  const {eyes} = params;

  const icon = eyes ? 'eye' : 'eye-off';
  const color = eyes ? '#adadad' : undefined;

  return (
    <View style={[styles.container, params.style]}>
      <StyledInput
        style={styles.input}
        onChangeText={params.onChangeText}
        value={params.value}
        placeholder={params.placeholder}
        secureTextEntry={icon === 'eye' ? false : true}
      />
      <IconButton
        onPress={() => params.setEyes(!params.eyes)}
        icon={icon}
        style={styles.icon}
        iconColor={color}
      />
    </View>
  );
};

export default StyledInputWithEyes;
