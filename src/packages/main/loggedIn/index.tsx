import CustomButton from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRootNavigation } from "@/src/nav/root/hooks";
import { ROOT_ROUTES } from "@/src/nav/root/types";
import { storage } from "@/src/storage";
import { useAppDispatch } from "@/src/store/hooks";
import { userActions } from "@/src/store/slices/user";
import React from "react";

function LoggedInScreen() {
  const navigation = useRootNavigation();
  const dispatch = useAppDispatch();

  const logOut = async () => {
    // clear redux store and locale storage
    dispatch(userActions.logout());
    await storage.removeItem("user");

    // navigate user to the auth stack
    navigation.navigate(ROOT_ROUTES.AUTH);
  };

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
        <CustomButton title="Log Out" onPress={logOut} />
      </ThemedView>
    </ThemedView>
  );
}

export default LoggedInScreen;
