import { FormControl, Text, View, VStack } from 'native-base';
import * as React from 'react';

export default function LabelWrappedInput(props) {
  return (
    <VStack style={{ width: '100%' }} space="8px">
      <FormControl.Label color="#000" fontFamily="body">
        {props.label}
      </FormControl.Label>
      {props.children}
    </VStack>
  );
}
