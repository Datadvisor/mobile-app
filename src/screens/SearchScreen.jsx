import * as React from 'react';
import { Button } from 'native-base';
import MainLayout from '../components/Main/MainLayout';

export default function SearchScreen() {
  return (
    <MainLayout title="Search">
      <Button variant="primary">Search</Button>
    </MainLayout>
  );
}
