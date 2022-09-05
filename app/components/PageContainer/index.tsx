import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {styles} from './styles';

interface PageContainerParams {
  children: any;
  style?: StyleProp<ViewStyle>;
}

const PageContainer = (params: PageContainerParams) => {
  return (
    <View style={[styles.container, params.style]}>{params.children}</View>
  );
};

export default PageContainer;
