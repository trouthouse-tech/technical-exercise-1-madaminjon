import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROOT_ROUTES, RootStackParamList } from "./types";
import AuthStack from "../auth";
import MainStack from "../main";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name={ROOT_ROUTES.AUTH} component={AuthStack} />
        <Screen name={ROOT_ROUTES.MAIN} component={MainStack} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
