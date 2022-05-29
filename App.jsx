import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Rubik_400Regular, Rubik_600SemiBold } from '@expo-google-fonts/rubik';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splashcreen from './src/screens/SplashScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import theme from './src/utils/theme/theme';
import MainScreen from './src/screens/MainScreen';

const Stack = createNativeStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) {
    return (
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Splash" component={Splashcreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Splash" component={Splashcreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
