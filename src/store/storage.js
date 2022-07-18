import AsyncStorage from '@react-native-async-storage/async-storage';
import { storageConstants } from '../utils/constants';

export const getOfflineUser = async () => {
  try {
    const user = await AsyncStorage.getItem(storageConstants.USER_KEY);

    return user ? JSON.parse(user) : undefined;
  } catch (err) {
    return undefined;
  }
};
