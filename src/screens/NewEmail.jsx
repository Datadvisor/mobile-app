import { Button, Input, Text, VStack } from 'native-base';
import * as React from 'react';
import LabelWrappedInput from '../components/LabelWrappedInput';
import MainLayout from '../components/Main/MainLayout';
import { useLoggedInUser } from '../hooks/useLoggedInUser';
import { useUpdateUserMutation } from '../services/user';
import { validateEmail } from '../utils/forms/validation';

export default function NewEmail({ navigation }) {
  const [inputErrors, setInputErrors] = React.useState({});
  const user = useLoggedInUser();
  const [email, setEmail] = React.useState(user?.email);
  const [updateUser, { isLoading, isSuccess, error }] = useUpdateUserMutation();

  React.useEffect(() => setEmail(user?.email), [user?.email]);

  React.useEffect(() => {
    if (navigation && !isLoading && isSuccess) {
      navigation.goBack();
    }
  }, [isSuccess, isLoading, navigation]);

  const onSubmit = React.useCallback(() => {
    const emailError = validateEmail(email);

    if (emailError) {
      setInputErrors({ email: emailError });
      return;
    }

    if (user) {
      updateUser({ email, id: user.id });
    }
  }, [updateUser, email, setInputErrors, user]);

  return (
    <MainLayout title="Modifier votre email">
      <VStack
        w="100%"
        h="100%"
        space="12px"
        alignItems="center"
        justifyContent="center"
        pb="64px"
        px="12px"
      >
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
