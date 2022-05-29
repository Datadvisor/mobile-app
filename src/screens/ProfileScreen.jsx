import * as React from 'react';
import { Button, Circle, HStack, Text, VStack } from 'native-base';
import MainLayout from '../components/Main/MainLayout';

export default function ProfileScreen() {
  return (
    <MainLayout title="Profile">
      <VStack w="100%" h="100%" alignItems="center" justifyContent="space-between" pb="64px">
        <VStack pt="32px" px="32px" w="100%" align="flex-start" space="48px">
          <HStack space="8px" alignItems="flex-start">
            <Circle size="50px" bg="white" borderColor="blue" borderWidth="3px">
              <Text color="blue" fontSize="30px" fontWeight="bold">
                V
              </Text>
            </Circle>
            <VStack space="8px" align="start">
              <Text>MIKHAIL Véronia</Text>
              <Text>veronia.mikhail@epitech.eu</Text>
            </VStack>
          </HStack>

          <VStack alignItems="flex-start" space="12px">
            <Text fontWeight="bold">Modification des informations personelles</Text>
            <VStack align="start" pl="32px" space="8px">
              <Text>Modifier votre email</Text>
              <Text>Modifier votre mot de passe</Text>
            </VStack>
          </VStack>

          <VStack alignItems="center" space="12px" w="100%">
            <Button variant="primary" w="100%">
              Déconnexion
            </Button>
            <Text>ou</Text>
            <Text color="#E74C3C">Supprimer le compte</Text>
          </VStack>
        </VStack>

        <Text color="#ccc">Compte créé le 07/02/2022</Text>
      </VStack>
    </MainLayout>
  );
}
