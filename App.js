import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "expo-status-bar";
import { Home } from './src/screens/home';
import { Login } from './src/screens/sign';
import { ForgotPassword } from './src/screens/forgotpassword'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" component={Home}/>
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
       </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
