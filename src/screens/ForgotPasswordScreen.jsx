import * as React from 'react';
import LabelWrappedInput from '../components/LabelWrappedInput';
import { Button, Input, View, VStack } from 'native-base';
import AuthLayout from '../components/Auth/AuthLayout';
import { Alert } from 'react-native';

export default function ForgotPasswordScreen({ navigation }) {
  const [Email, setEmail] = React.useState('');

  const handleEmailChange = (text) => setEmail(text);

  function checkPassword() {
    if (Email.includes('@') && Email.includes('.')) navigation.navigate('ResetPassword');
    else Alert.alert('Error:\nEmail not valid');
  }

  return (
    <View>
      <AuthLayout title="Reset your password" subtitle="Clean your data across the web">
        <VStack w="100%" space="22px">
          <LabelWrappedInput label="E-mail">
            <Input placeholder="E-mail" onChangeText={handleEmailChange} />
          </LabelWrappedInput>
        </VStack>
        <Button variant="primary" w="100%" onPress={checkPassword}>
          RESET YOUR PASSWORD
        </Button>
      </AuthLayout>
    </View>
  );
}
