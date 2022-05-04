import { View } from 'native-base';
import * as React from 'react';
import AuthHeader from './AuthHeader';

export default function AuthLayout({ title, subtitle }) {
  return (
    <View w="100%" h="100%" py="64px" px="12px">
      <AuthHeader title={title} subtitle={subtitle} />
    </View>
  );
}
