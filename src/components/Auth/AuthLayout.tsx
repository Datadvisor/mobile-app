import { View, VStack } from 'native-base';
import * as React from 'react';
import AuthHeader from './AuthHeader';

export default function AuthLayout({ title, subtitle, ...props }) {
  return (
    <View bg="white" w="100%" h="100%" py="64px" px="12px">
      <VStack alignItems="center" w="100%" space="48px">
        <AuthHeader title={title} subtitle={subtitle} />
        {props.children}
      </VStack>
    </View>
  );
}
