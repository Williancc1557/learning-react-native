import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

interface PageContainer {
  children: any;
  style: StyleProp<ViewStyle>;
}

const PageContainer = (params: PageContainer) => {
  return <View style={params.style}>{params.children}</View>;
};

export default PageContainer;
