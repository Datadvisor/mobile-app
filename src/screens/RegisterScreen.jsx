import * as React from 'react';
import LabelWrappedInput from '../components/LabelWrappedInput';
import { Button, Input, ScrollView, VStack } from 'native-base';
import AuthLayout from '../components/Auth/AuthLayout';

export default function RegisterScreen({ navigation }) {
  return (
    <ScrollView>
      <AuthLayout title="Sign up to your account" subtitle="Clean your data across the web">
        <VStack w="100%" space="24px">
          <LabelWrappedInput label="E-mail">
            <Input placeholder="E-mail" />
          </LabelWrappedInput>

          <LabelWrappedInput label="Username">
            <Input placeholder="Username" />
          </LabelWrappedInput>

          <LabelWrappedInput label="Password">
            <Input placeholder="Minimum 8 caractères" />
          </LabelWrappedInput>

          <LabelWrappedInput label="Confirm password">
            <Input placeholder="Minimum 8 caractères" />
          </LabelWrappedInput>
        </VStack>
        <Button variant="primary" w="100%">
          Sign up
        </Button>
      </AuthLayout>
    </ScrollView>
  );
}
