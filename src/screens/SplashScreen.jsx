import { View, Image } from 'native-base';
import { StyleSheet } from 'react-native';
import * as React from 'react';
import logo from '../../assets/logo.png';

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
  React.useEffect(() => {
    const id = setTimeout(() => {
      navigation.replace('Home');
    }, 2000);

    return () => clearTimeout(id);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={logo} {...styles.logoSize} />
    </View>
  );
}
