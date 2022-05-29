import * as React from 'react';
import { Button, StatusBar, View } from 'native-base';

export default function HomeScreen() {
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <View flex={1} w="100%" h="100%" justifyContent="center">
        <Button variant="primary">Home</Button>
      </View>
    </>
  );
}
