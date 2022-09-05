import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import StyledCheckBox from '../StyledCheckBox';
import StyledText from '../StyledText';
import {styles} from './styles';

interface CheckBoxWithTextParams {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  style?: StyleProp<ViewStyle>;
  text: string;
}

const CheckBoxWithText = (params: CheckBoxWithTextParams) => {
  return (
    <View style={[styles.container, params.style]}>
      <StyledCheckBox checked={params.checked} setChecked={params.setChecked} />
      <StyledText
        style={styles.text}
        onPress={() => {
          params.setChecked(!params.checked);
        }}>
        {params.text}
      </StyledText>
    </View>
  );
};

export default CheckBoxWithText;
