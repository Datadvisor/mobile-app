import { View, Text, Button, Image } from 'react-native-ui-lib';
import * as React from 'react';
import logo from "../../assets/logo.png";

export default function Splashcreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#6B96F6" }}>
      <Image source={logo} />
    </View>
  );
}