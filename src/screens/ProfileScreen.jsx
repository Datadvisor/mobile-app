import * as React from 'react';
import dayjs from 'dayjs';
import { Button, Circle, HStack, Text, VStack } from 'native-base';
import MainLayout from '../components/Main/MainLayout';
import { useLoggedInUser } from '../hooks/useLoggedInUser';
import { useLogoutMutation } from '../services/auth';

export default function ProfileScreen({ navigation }) {
  const user = useLoggedInUser();
  const [logout, { isLoading, isSuccess }] = useLogoutMutation();

  React.useEffect(() => {
    if (navigation && !isLoading && isSuccess) {
      navigation.replace('Login');
    }
  }, [navigation, isSuccess, isLoading]);

  return (
    <MainLayout title="Profile">
      <VStack w="100%" h="100%" alignItems="center" justifyContent="space-between" pb="64px">
        <VStack pt="32px" px="32px" w="100%" align="flex-start" space="48px">
          <HStack space="8px" alignItems="flex-start">
            <Circle size="50px" bg="white" borderColor="blue" borderWidth="3px">
              <Text color="blue" fontSize="30px" fontWeight="bold">
                {user?.firstName.slice(0, 1).toUpperCase()}
              </Text>
            </Circle>
            <VStack space="8px" align="start">
              <Text>
                {user?.lastName.toUpperCase()} {user?.firstName}
              </Text>
              <Text>{user?.email}</Text>
            </VStack>
          </HStack>

          <VStack alignItems="flex-start" space="12px">
            <Text fontWeight="bold">Change personal information</Text>
            <VStack align="start" pl="32px" space="8px">
              <Text onPress={() => navigation.push('NewEmail')}>Change your email</Text>
              <Text onPress={() => navigation.push('NewPassword')}>Change your password</Text>
            </VStack>
          </VStack>

          <VStack alignItems="center" space="12px" w="100%">
            <Button variant="primary" w="100%" onPress={() => logout()} isLoading={isLoading}>
              Log out
            </Button>
            <Text>ou</Text>
            <Text color="#E74C3C">Delete your account</Text>
          </VStack>
        </VStack>

        <Text color="#ccc">Account created the {dayjs(user?.createdAt).format('DD/MM/YYYY')}</Text>
      </VStack>
    </MainLayout>
  );
}
