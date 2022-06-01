import * as React from 'react';
import LabelWrappedInput from '../components/LabelWrappedInput';
import { Button, Input, View, VStack } from 'native-base';
import { Alert } from 'react-native';
import AuthLayout from '../components/Auth/AuthLayout';


export default function ResetPasswordScreen({ navigation }) {
  const [Password, setPassword] = React.useState('');
  const [ConfirmPassword, setConfirmPassword] = React.useState('');

  const handlePasswordChange = text => setPassword(text);
  const handleConfirmPasswordChange = text => setConfirmPassword(text);

  function checkPassword() {
    if (Password.length < 8)
      Alert.alert("Error:\nThis password is too short")
    else if (Password !== ConfirmPassword)
      Alert.alert("Error:\nPasswords are not identical")
    else
      navigation.navigate('Register')
  }

  return (
    <View>
      <AuthLayout title="Reset your password" subtitle="Clean your data across the web">
        <VStack w="100%" space="22px">
          <LabelWrappedInput label="Password">
            <Input placeholder="Password" onChangeText={handlePasswordChange} />
          </LabelWrappedInput>

          <LabelWrappedInput label="Confirm password">
            <Input placeholder="Confirm password" onChangeText={handleConfirmPasswordChange} />
          </LabelWrappedInput>
        </VStack>
        <Button variant="primary" w="100%" onPress={checkPassword}>
          RESET YOUR PASSWORD
        </Button>
      </AuthLayout>
    </View>
  );
}
