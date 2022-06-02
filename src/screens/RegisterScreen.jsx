import * as React from 'react';
import { Button, Input, ScrollView, Text, VStack } from 'native-base';
import LabelWrappedInput from '../components/LabelWrappedInput';
import AuthLayout from '../components/Auth/AuthLayout';
import { validateRegistrationInputs } from '../utils/forms/validation';
import { useSignupMutation } from '../services/user';

export default function RegisterScreen({ navigation }) {
  const [inputErrors, setInputErrors] = React.useState({});
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');

  const [register, { isLoading, isSuccess, error }] = useSignupMutation();

  React.useEffect(() => {
    if (!isLoading && isSuccess && navigation) {
      navigation.replace('Login');
    }
  }, [navigation, isSuccess, isLoading]);

  const onSubmit = React.useCallback(() => {
    const errors = validateRegistrationInputs(firstname, lastname, email, password, repeatPassword);

    if (Object.values(errors).some((e) => e)) {
      setInputErrors(errors);
      return;
    }

    // Call API to register user
    register({ lastName: lastname, firstName: firstname, email: email.toLowerCase(), password });
  }, [register, firstname, lastname, email, password, repeatPassword]);

  return (
    <ScrollView>
      <AuthLayout title="Sign up to your account" subtitle="Clean your data across the web">
        <VStack w="100%" space="24px">
          <LabelWrappedInput label="Firstname" error={inputErrors.firstname}>
            <Input
              onChangeText={(text) => {
                setInputErrors({ ...inputErrors, firstname: undefined });
                setFirstname(text.trim());
              }}
              placeholder="Firstname"
              value={firstname}
            />
          </LabelWrappedInput>
          <LabelWrappedInput label="Lastname" error={inputErrors.lastname}>
            <Input
              onChangeText={(text) => {
                setInputErrors({ ...inputErrors, lastname: undefined });
                setLastname(text.trim());
              }}
              placeholder="Lastname"
              value={lastname}
            />
          </LabelWrappedInput>

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

          <Button variant="primary" w="100%" onPress={onSubmit} isLoading={isLoading}>
            Sign up
          </Button>

          {!isLoading && error && 'data' in error && (
            <Text w="100%" textAlign="center" color="red.500">
              {error.data.error.message}
            </Text>
          )}
        </VStack>
        <Text>
          Already have an account ?{' '}
          <Text
            color="blue"
            fontWeight="bold"
            onPress={() => {
              navigation.replace('Login');
            }}
          >
            Sign in
          </Text>
        </Text>
      </AuthLayout>
    </ScrollView>
  );
}
