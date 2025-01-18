import CustomButton from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useAuthNavigation } from "@/src/nav/auth/hooks";
import { AUTH_ROUTES } from "@/src/nav/auth/types";
import React from "react";
import { StyleSheet } from "react-native";

const WelcomeScreen = () => {
  const navigation = useAuthNavigation();

  const goToLoginScreen = () => {
    navigation.navigate(AUTH_ROUTES.LOGIN);
  };

  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={{}}>
        <ThemedText style={styles.title}>
          Welcome to the{" "}
          <ThemedText style={[styles.title, styles.spanReactNative]}>
            React Native
          </ThemedText>
        </ThemedText>
        <ThemedText style={styles.describtion}>Technical Exercise</ThemedText>
      </ThemedView>
      <ThemedView style={styles.btnsView}>
        <CustomButton title="Sign Up" onPress={() => {}} />
        <CustomButton title="Sign In" onPress={goToLoginScreen} />
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 32,
    marginBottom: 12,
  },
  spanReactNative: { color: "#FF645C", fontStyle: "italic", fontWeight: "700" },
  describtion: {
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 14,
  },
  btnsView: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 12,
    flex: 0.75,
  },
});

export default WelcomeScreen;
