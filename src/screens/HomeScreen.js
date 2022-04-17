import { View, Text, Button } from 'react-native-ui-lib';
import * as React from 'react';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text heading>Helloo</Text>
      <Button label={'Press'} />
    </View>
  );
}