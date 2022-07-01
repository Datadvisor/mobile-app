import { Button, Input, Text, useToast, VStack } from 'native-base';
import * as React from 'react';
import LabelWrappedInput from '../components/LabelWrappedInput';
import MainLayout from '../components/Main/MainLayout';
import { useLoggedInUser } from '../hooks/useLoggedInUser';
import { useUpdateUserMutation } from '../services/user';
import { validatePassword } from '../utils/forms/validation';

export default function NewPassword({ navigation }) {
  const toast = useToast();
  const user = useLoggedInUser();
  const [inputErrors, setInputErrors] = React.useState({});
  const [password, setPassword] = React.useState('');
  const [updateUser, { isLoading, isSuccess, error }] = useUpdateUserMutation();

  React.useEffect(() => {
    if (navigation && !isLoading && isSuccess) {
      toast.show({
        title: 'Success',
        description: 'Your password has been updated',
        bg: 'green.400',
        variant: 'success',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isLoading, navigation]);

  const onSubmit = () => {
    const passwordError = validatePassword(password);

    if (passwordError) {
      setInputErrors({ password: passwordError });
      return;
    }

    if (user) {
      updateUser({ password, id: user.id });
    }
  };

  return (
    <MainLayout title="Changer votre mot de passe">
      <VStack
        w="100%"
        h="100%"
        space="12px"
        alignItems="center"
        justifyContent="center"
        pb="64px"
        px="12px"
      >
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
          Save
        </Button>

        {error && 'data' in error && (
          <Text w="100%" textAlign="center" color="red.500">
            {error.data.error.message}
          </Text>
        )}
      </VStack>
    </MainLayout>
  );
}
