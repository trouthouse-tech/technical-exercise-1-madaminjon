import CustomButton from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";

function LoggedInScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedText
        style={{
          textAlign: "center",
          fontSize: 24,
          marginTop: 30,
        }}
      >
        You are logged in!
      </ThemedText>
      <ThemedView
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomButton title="Log Out" onPress={() => {}} />
      </ThemedView>
    </ThemedView>
  );
}

export default LoggedInScreen;
