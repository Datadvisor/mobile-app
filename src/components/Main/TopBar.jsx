import * as React from 'react';
import { HStack, Text } from 'native-base';

export default function TopBar({ title }) {
  return (
    <HStack
      px="18px"
      py="14  px"
      w="100%"
      bg="#F8F7F7"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text flexGrow={2} textAlign="center" fontSize="15px">
        {title}
      </Text>
    </HStack>
  );
}
