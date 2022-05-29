import * as React from 'react';
import { Button, StatusBar, View } from 'native-base';
import MainLayout from '../components/Main/MainLayout';

export default function HomeScreen() {
  return (
    <MainLayout title="Home">
      <Button variant="primary">Home</Button>
    </MainLayout>
  );
}
