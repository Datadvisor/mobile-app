import * as React from 'react';
import { Button, Input, ScrollView, Text, VStack } from 'native-base';
import LabelWrappedInput from '../components/LabelWrappedInput';
import AuthLayout from '../components/Auth/AuthLayout';
import { validateLoginInputs } from '../utils/forms/validation';
import { useLoginMutation } from '../services/auth';

export default function LoginScreen({ navigation }) {
  const [inputErrors, setInputErrors] = React.useState({});
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [login, { isLoading, isSuccess, error }] = useLoginMutation();

  React.useEffect(() => {
    if (!isLoading && isSuccess && navigation) {
      navigation.replace('Main');
    }
  }, [navigation, isSuccess, isLoading]);

  const onSubmit = React.useCallback(() => {
    const errors = validateLoginInputs(email.toLowerCase(), password);
    //check mail and password
    if (Object.values(errors).some((e) => e)) {
      setInputErrors(errors);
      return;
    }
    // Call API to Login user
    login({ email: email.toLowerCase(), password });
  }, [email, password, login]);

  return (
    <ScrollView>
      <AuthLayout title="Sign In to your account" subtitle="Clean your data across the web">
        <VStack w="100%" space="24px">
          <LabelWrappedInput label="E-mail" error={inputErrors.email}>
            <Input
              onChangeText={(text) => {
                setInputErrors({ ...inputErrors, email: undefined });
                setEmail(text.trim());
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

          <Button variant="primary" w="100%" onPress={onSubmit} isLoading={isLoading}>
            Sign In
          </Button>

          {error && 'data' in error && (
            <Text w="100%" textAlign="center" color="red.500">
              {error.data.error.message}
            </Text>
          )}

          <Text w="100%" textAlign="center">
            OR
          </Text>

          <Button variant="primary" w="100%" isDisabled={isLoading}>
            Sign in with Google
          </Button>
        </VStack>
        <Text
          color="blue"
          fontWeight="bold"
          onPress={() => {
            navigation.replace('ForgotPassword');
          }}
        >
          Forgot Password ?
        </Text>
        <Text>
          Don’t have an account yet ?{' '}
          <Text
            color="blue"
            fontWeight="bold"
            onPress={() => {
              navigation.replace('Register');
            }}
          >
            Sign up
          </Text>
        </Text>
      </AuthLayout>
    </ScrollView>
  );
}
