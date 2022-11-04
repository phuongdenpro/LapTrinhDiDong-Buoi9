import "react-native-gesture-handler";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "./screens/screen1";
import Screen2 from "./screens/screen2";
import Screen3 from "./screens/screen3";
import { useState } from "react";

const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around"}}>
      <Button
        title="Go to Screen 1"
        color="#f194ff"
        onPress={() => navigation.navigate("Screen1")}
      />
      <Button
        title="Go to Screen 2"
        color="#f194ff"
        onPress={() => navigation.navigate("Screen2")}
      />
      <Button
        title="Go to Screen 3"
        color="#f194ff"
        onPress={() => navigation.navigate("Screen3")}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
