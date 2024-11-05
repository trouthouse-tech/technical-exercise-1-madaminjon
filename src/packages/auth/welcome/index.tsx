import {useAuthNavigation} from "@/src/nav/auth/hooks";
import {AUTH_ROUTES} from "@/src/nav/auth/types";
import React from "react";
import {View, Text} from "react-native";

const WelcomeScreen = () => {
  const navigation = useAuthNavigation();

  const goToLoginScreen = () => {
    navigation.navigate(AUTH_ROUTES.LOGIN);
  };

  return (
    <View>
      <View style={{}}>
        <Text>Welcome Screen</Text>
      </View>
      <View style={{}}>
        <Text>Sign Up</Text>
      </View>
    </View>
  )
};

export default WelcomeScreen;