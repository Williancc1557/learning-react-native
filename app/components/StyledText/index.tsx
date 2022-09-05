import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from './styles';

interface StyledTextParams {
  children: any;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const StyledText = (params: StyledTextParams) => {
  return (
    <Text style={[styles.text, params.style]} onPress={params.onPress}>
      {params.children}
    </Text>
  );
};

export default StyledText;
