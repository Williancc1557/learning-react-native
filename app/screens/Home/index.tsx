import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {useDispatch} from 'react-redux';
import PageContainer from '../../components/PageContainer';
import StyledButton from '../../components/StyledButton';
import {updateAccessToken, updateRefreshToken} from '../../services/userSlice';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <PageContainer>
      <StyledButton
        onpress={async () => {
          await AsyncStorage.multiRemove(['refreshToken', 'accessToken']);
          dispatch(updateAccessToken(null));
          dispatch(updateRefreshToken(null));
        }}
      />
    </PageContainer>
  );
};

export default Home;
