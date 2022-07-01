import { Button, Input, ScrollView, Text, useToast, VStack } from 'native-base';
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
  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('');
  const [updateUser, { isLoading, isSuccess, error }] = useUpdateUserMutation();

  React.useEffect(() => {
    if (navigation && !isLoading && isSuccess) {
      toast.show({
        title: 'Success',
        description: 'Your password has been updated',
        bg: 'green.400',
        variant: 'success',
        duration: 2000,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isLoading, navigation]);

  const onSubmit = () => {
    const currentPasswordError = validatePassword(currentPassword);
    const newPasswordError = validatePassword(newPassword);
    let confirmNewPasswordError = validatePassword(confirmNewPassword);

    if (!newPasswordError && !confirmNewPasswordError) {
      confirmNewPasswordError =
        newPassword !== confirmNewPassword ? 'Passwords are not the same' : null;
    }

    if (currentPasswordError || newPasswordError || confirmNewPasswordError) {
      setInputErrors({
        currentPassword: currentPasswordError,
        newPassword: newPasswordError,
        confirmNewPassword: confirmNewPasswordError,
      });
      return;
    }

    if (user) {
      updateUser({ password: newPassword, id: user.id });
    }
  };

  return (
    <MainLayout title="Changer votre mot de passe">
      <ScrollView h="100%" w="100%">
        <VStack
          w="100%"
          h="100%"
          space="12px"
          alignItems="center"
          justifyContent="center"
          pb="64px"
          px="12px"
        >
          <LabelWrappedInput label="Current password" error={inputErrors.currentPassword}>
            <Input
              type="password"
              onChangeText={(pwd) => {
                setInputErrors({ ...inputErrors, currentPassword: undefined });
                setCurrentPassword(pwd);
              }}
              placeholder="Min. 8 characters"
              value={currentPassword}
            />
          </LabelWrappedInput>

          <LabelWrappedInput label="New password" error={inputErrors.newPassword}>
            <Input
              type="password"
              onChangeText={(pwd) => {
                setInputErrors({ ...inputErrors, newPassword: undefined });
                setNewPassword(pwd);
              }}
              placeholder="Min. 8 characters"
              value={newPassword}
            />
          </LabelWrappedInput>

          <LabelWrappedInput label="Confirm new password" error={inputErrors.confirmNewPassword}>
            <Input
              type="password"
              onChangeText={(pwd) => {
                setInputErrors({ ...inputErrors, confirmNewPassword: undefined });
                setConfirmNewPassword(pwd);
              }}
              placeholder="Min. 8 characters"
              value={confirmNewPassword}
            />
          </LabelWrappedInput>
          <Button variant="primary" mt="24px" w="100%" onPress={onSubmit} isLoading={isLoading}>
            Save
          </Button>

          {error && 'data' in error && (
            <Text w="100%" textAlign="center" color="red.500">
              {error.data.error.message}
            </Text>
          )}
        </VStack>
      </ScrollView>
    </MainLayout>
  );
}
