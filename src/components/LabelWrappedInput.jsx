import { FormControl, VStack, WarningOutlineIcon } from 'native-base';
import * as React from 'react';

export default function LabelWrappedInput(props) {
  return (
    <FormControl isRequired={props.isRequired} isInvalid={!!props.error}>
      <VStack style={{ width: '100%' }} space="8px">
        <FormControl.Label color="#000" fontFamily="body">
          {props.label}
        </FormControl.Label>
        {props.children}
        {props.error && (
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {props.error}
          </FormControl.ErrorMessage>
        )}
      </VStack>
    </FormControl>
  );
}
