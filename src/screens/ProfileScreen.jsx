import * as React from 'react';
import { Button, View } from 'native-base';

export default function ProfileScreen() {
  return (
    <View flex={1} w="100%" h="100%" justifyContent="center">
      <Button variant="primary">Profile</Button>
    </View>
  );
}
