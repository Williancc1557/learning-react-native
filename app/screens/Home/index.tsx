import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {useDispatch} from 'react-redux';
import PageContainer from '../../components/PageContainer';
import StyledButton from '../../components/StyledButton';
import {updateTokens} from '../../services/userSlice';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <PageContainer>
      <StyledButton
        onpress={async () => {
          await AsyncStorage.multiRemove(['refreshToken', 'accessToken']);
          dispatch(
            updateTokens({
              refreshToken: null,
              accessToken: null,
            }),
          );
        }}
      />
    </PageContainer>
  );
};

export default Home;
