import * as React from 'react';
import { getOfflineUser } from '../store/storage';

export function useLoggedInUser() {
  const [user, setUser] = React.useState(undefined);

  React.useEffect(() => {
    getOfflineUser().then((savedUser) => {
      setUser(savedUser);
    });
  }, []);

  return user;
}
