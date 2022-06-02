import { View, Image } from 'native-base';
import { StyleSheet } from 'react-native';
import * as React from 'react';
import logo from '../../assets/logo.png';
import { useLazyMeQuery } from '../services/user';

const styles = StyleSheet.create({
  logoSize: {
    height: 120,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6B96F6',
  },
});

export default function SplashScreen({ navigation }) {
  const [getMyself, { isSuccess, isError }] = useLazyMeQuery();

  React.useEffect(() => {
    const id = setTimeout(() => {
      getMyself();
    }, 2000);

    return () => clearTimeout(id);
  }, [getMyself]);

  React.useEffect(() => {
    if (navigation) {
      if (isSuccess) {
        navigation.replace('Main');
      } else if (isError) {
        navigation.replace('Login');
      }
    }
  }, [navigation, isSuccess, isError]);

  return (
    <View style={styles.container}>
      <Image source={logo} alt="Logo" {...styles.logoSize} />
    </View>
  );
}
