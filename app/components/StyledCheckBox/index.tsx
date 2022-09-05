import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Checkbox} from 'react-native-paper';

interface StyledCheckBoxParams {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  style?: StyleProp<ViewStyle>;
}

const StyledCheckBox = (params: StyledCheckBoxParams) => {
  return (
    <Checkbox
      onPress={() => {
        params.setChecked(!params.checked);
      }}
      status={params.checked ? 'checked' : 'unchecked'}
    />
  );
};

export default StyledCheckBox;
