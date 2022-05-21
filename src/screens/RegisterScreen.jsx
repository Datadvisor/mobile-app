import * as React from 'react';
import { Button, Input, ScrollView, Text, VStack } from 'native-base';
import LabelWrappedInput from '../components/LabelWrappedInput';
import AuthLayout from '../components/Auth/AuthLayout';
import { validateRegistrationInputs } from '../utils/forms/validation';

export default function RegisterScreen({ navigation }) {
  const [inputErrors, setInputErrors] = React.useState({});
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');

  const onSubmit = React.useCallback(() => {
    const errors = validateRegistrationInputs(email, password, repeatPassword);

    if (Object.values(errors).some((e) => e)) {
      setInputErrors(errors);
      return;
    }

    // Call API to register user
  }, [email, password, repeatPassword]);

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
              placeholder="Ex: my@data.visor"
              value={email}
            />
          </LabelWrappedInput>

          <LabelWrappedInput label="Password" error={inputErrors.password}>
            <Input
              type="password"
              onChangeText={(pwd) => {
                setInputErrors({ ...inputErrors, password: undefined });
                setPassword(pwd);
              }}
              placeholder="Min. 8 characters"
              value={password}
            />
          </LabelWrappedInput>

          <LabelWrappedInput label="Confirm password" error={inputErrors.repeatPassword}>
            <Input
              type="password"
              onChangeText={(repeatPwd) => {
                setInputErrors({ ...inputErrors, repeatPassword: undefined });
                setRepeatPassword(repeatPwd);
              }}
              placeholder="Min. 8 characters"
              value={repeatPassword}
            />
          </LabelWrappedInput>

          <Button variant="primary" w="100%" onPress={onSubmit}>
            Sign up
          </Button>
        </VStack>
        <Text>
          Already have an account ?{' '}
          <Text
            color="blue"
            fontWeight="bold"
            onPress={() => {
              navigation.pop();
              navigation.navigate('Login');
            }}
          >
            Sign in
          </Text>
        </Text>
      </AuthLayout>
    </ScrollView>
  );
}
