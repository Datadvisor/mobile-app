import * as React from 'react';
import { Button } from 'native-base';
import MainLayout from '../components/Main/MainLayout';

export default function ProfileScreen() {
  return (
    <MainLayout title="Profile">
      <Button variant="primary">Profile</Button>
    </MainLayout>
  );
}
