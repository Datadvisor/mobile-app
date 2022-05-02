import { View, Image } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';
import * as React from 'react';
import logo from '../../assets/logo.png';

const styles = StyleSheet.create({
  logoSize: {
    height: 120,
    resizeMode: 'contain',
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
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6B96F6',
      }}
    >
      <Image source={logo} {...styles.logoSize} />
    </View>
  );
}
