import { useMeQuery } from '../services/user';

export function useLoggedInUser() {
  // const [user, setUser] = React.useState(undefined);

  // React.useEffect(() => {
  //   getOfflineUser().then((savedUser) => {
  //     setUser(savedUser);
  //   });
  // }, []);
  const { data: user } = useMeQuery();

  return user;
}
