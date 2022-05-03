import { StyleSheet } from 'react-native';
import * as React from 'react';
import D from '../../assets/D.png';
import LabelWrappedInput from '../components/LabelWrappedInput';
import { Image, Text, View } from 'native-base';

export default function RegisterScreen({ navigation }) {
  return (
    <View>
      <Image source={D} />
    </View>
  );
}
