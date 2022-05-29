import * as React from 'react';
import { StatusBar, View, VStack } from 'native-base';
import TopBar from './TopBar';

export default function MainLayout({ children, title }) {
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <View w="100%" minHeight="100%">
        <VStack alignItems="center" w="100%" h="100%" space="48px">
          <TopBar title={title} />
          {children}
        </VStack>
      </View>
    </>
  );
}
