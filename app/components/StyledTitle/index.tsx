import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from './styles';

interface StyledTitleParams {
  children: any;
  style?: StyleProp<ViewStyle>;
}

const StyledTitle = (params: StyledTitleParams) => {
  return <Text style={[styles.title, params.style]}>{params.children}</Text>;
};

export default StyledTitle;
