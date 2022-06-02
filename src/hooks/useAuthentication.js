import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMeQuery } from '../services/user';
import { storageConstants } from '../utils/constants';

export function useAuthentication() {
  const { data, isLoading, isSuccess, isError } = useMeQuery();

  const refreshUserDataStorage = async (user) => {
    try {
      await AsyncStorage.setItem(storageConstants.USER_KEY, JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (isSuccess && data) {
      refreshUserDataStorage(data);
    }
  }, [data, isLoading, isSuccess]);

  return {
    isLoading,
    isAuthenticated: isSuccess && !isError,
  };
}
