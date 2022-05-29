import * as React from 'react';
import { Button, View } from 'native-base';

export default function SearchScreen() {
  return (
    <View flex={1} w="100%" h="100%" justifyContent="center">
      <Button variant="primary">Search</Button>
    </View>
  );
}
