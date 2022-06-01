import * as React from 'react';
import { useMeQuery } from '../services/user';

export function useAuthentication() {
  const { isLoading, isSuccess, isError } = useMeQuery();

  return {
    isLoading,
    isAuthenticated: isSuccess && !isError,
  };
}
