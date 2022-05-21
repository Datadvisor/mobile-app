import * as React from 'react';
import { Button, View } from 'native-base';

export default function HomeScreen() {
  return (
    <View flex={1} w="100%" h="100%" justifyContent="center">
      <Button variant="primary">Home</Button>
    </View>
  );
}
