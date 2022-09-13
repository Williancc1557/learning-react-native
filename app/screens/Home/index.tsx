import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {useDispatch} from 'react-redux';
import PageContainer from '../../components/PageContainer';
import StyledButton from '../../components/StyledButton';
import {updateAccess, updateTokens} from '../../services/authSlice';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <PageContainer style={{height: '100%', justifyContent: 'center'}}>
      <StyledButton
        onpress={async () => {
          await AsyncStorage.multiRemove(['refreshToken', 'accessToken']);
          dispatch(
            updateTokens({
              refreshToken: null,
              accessToken: null,
            }),
          );
          dispatch(updateAccess(false));
        }}
        title="Logout"
      />
    </PageContainer>
  );
};

export default Home;
