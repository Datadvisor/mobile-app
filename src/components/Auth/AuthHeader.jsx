import { Image, Text, VStack } from 'native-base';
import * as React from 'react';
import D from '../../../assets/D.png';

export default function AuthHeader({ title, subtitle }) {
  return (
    <VStack w="100%" alignItems="center" space="32px">
      <Image source={D} alt="Test" />

      <VStack w="100%" alignItems="center" space="12px">
        <Text fontFamily="heading" fontWeight="bold" fontSize="24px" textAlign="center">
          {title}
        </Text>
        <Text fontFamily="mono" color="gray">
          {subtitle}
        </Text>
      </VStack>
    </VStack>
  );
}
