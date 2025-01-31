import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MAIN_ROUTES, MainStackParamList } from "./types";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import LoggedInScreen from "@/src/packages/main/loggedIn";

const { Navigator, Screen } = createNativeStackNavigator<MainStackParamList>();

function MainStack() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={MAIN_ROUTES.LOGGEDIN}
      >
        <Screen
          name={MAIN_ROUTES.LOGGEDIN}
          component={LoggedInScreen}
          options={{ gestureEnabled: false }}
        />
      </Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    color: "#ffffff",
    flex: 1,
  },
});

export default MainStack;
