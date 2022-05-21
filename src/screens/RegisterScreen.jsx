import { StyleSheet } from 'react-native';
import * as React from 'react';
import LabelWrappedInput from '../components/LabelWrappedInput';
import { Button, Input, ScrollView, VStack } from 'native-base';
import AuthLayout from '../components/Auth/AuthLayout';

export default function RegisterScreen({ navigation }) {
  const [inputErrors, setInputErrors] = React.useState({
    email: 'Invalid email',
  });
  const [email, setEmail] = React.useState();
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [repeatPassword, setRepeatPassword] = React.useState();

  const onSubmit = React.useCallback(() => {
    console.log(email, username, password, repeatPassword);
  }, [email, username, password, repeatPassword, inputErrors]);

  return (
    <ScrollView>
      <AuthLayout title="Sign up to your account" subtitle="Clean your data across the web">
        <VStack w="100%" space="24px">
          <LabelWrappedInput label="E-mail" error={inputErrors.email}>
            <Input
              onChangeText={(text) => {
                setInputErrors({ ...inputErrors, email: undefined });
                setEmail(text.toLowerCase().trim());
              }}
              placeholder="E-mail"
              value={email}
            />
          </LabelWrappedInput>

          <LabelWrappedInput label="Username" error={inputErrors.username}>
            <Input
              onChangeText={(text) => {
                setInputErrors({ ...inputErrors, username: undefined });
                setUsername(text);
              }}
              placeholder="Username"
              value={username}
            />
          </LabelWrappedInput>

          <LabelWrappedInput label="Password" error={inputErrors.password}>
            <Input
              type="password"
              onChangeText={(pwd) => {
                setInputErrors({ ...inputErrors, password: undefined });
                setPassword(pwd);
              }}
              placeholder="Minimum 8 caractères"
              value={password}
            />
          </LabelWrappedInput>

          <LabelWrappedInput label="Confirm password" error={inputErrors.repeatPassword}>
            <Input
              type="password"
              onChangeText={(repeatPwd) => {
                setInputErrors({ ...inputErros, repeatPassword: undefined });
                setRepeatPassword(repeatPwd);
              }}
              placeholder="Minimum 8 caractères"
              value={repeatPassword}
            />
          </LabelWrappedInput>
        </VStack>
        <Button variant="primary" w="100%" onPress={onSubmit}>
          Sign up
        </Button>
      </AuthLayout>
    </ScrollView>
  );
}
