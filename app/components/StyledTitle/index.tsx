import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {styles} from './styles';

interface StyledTitleParams {
  children: any;
  style?: StyleProp<ViewStyle>;
}

const StyledTitle = (params: StyledTitleParams) => {
  return <Text style={[styles.title, params.style]}>{params.children}</Text>;
};

export default StyledTitle;
