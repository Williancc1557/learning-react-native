import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {IconButton} from 'react-native-paper';
import {styles} from './styles';

interface HeaderGoBackParams {
  onPressGoBack: () => void;
  style?: StyleProp<ViewStyle>;
}

const HeaderGoBack = (params: HeaderGoBackParams) => {
  return (
    <View style={styles.container}>
      <IconButton
        icon="arrow-left"
        iconColor="white"
        style={[params.style, styles.button]}
        size={25}
        onPress={params.onPressGoBack}
      />
    </View>
  );
};

export default HeaderGoBack;
