import React from 'react';
import { Button, Incubator, View } from 'react-native-ui-lib';

export default function App() {
  return (
    <View flex width="100%" height="100%" paddingV-100>
      <Incubator.TextField
        placeholder={'E-mail'}
        floatingPlaceholder
        onChangeText={() => console.log('changed')}
        enableErrors
        validate={['required', 'email']}
        validationMessage={['Field is required', 'Email is invalid']}
        showCharCounter
      />
      <Button label="Register" body bg-primaryColor square></Button>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
