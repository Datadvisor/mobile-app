import { StyleSheet } from 'react-native';
import * as React from 'react';
import LabelWrappedInput from '../components/LabelWrappedInput';
import { Image, Input, Text, View } from 'native-base';
import AuthHeader from '../components/Auth/AuthHeader';
import AuthLayout from '../components/Auth/AuthLayout';

export default function RegisterScreen({ navigation }) {
  return (
    <AuthLayout title="Sign up to your account" subtitle="Clean your data across the web">

      <LabelWrappedInput label="Email">
        <Input placeholder="Email" />
      </LabelWrappedInput>
    </AuthLayout>
  );
}
