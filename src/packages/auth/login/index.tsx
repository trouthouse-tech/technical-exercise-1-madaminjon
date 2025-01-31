import CustomButton from "@/components/Button";
import CustomInput from "@/components/Input";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLogin } from "@/hooks/useLogin";
import { StyleSheet } from "react-native";

const LoginScreen = () => {
  const { loading, user, setUser, login } = useLogin();

  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={{}}>
        <ThemedText style={styles.title}>
          Welcome to the{" "}
          <ThemedText style={[styles.title, styles.spanReactNative]}>
            React Native
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.mainView}>
        <CustomInput
          label="Email"
          value={user.email}
          onChangeText={(text) => setUser({ ...user, email: text })}
        />
        <CustomInput
          label="Password"
          value={user.password}
          onChangeText={(text) => setUser({ ...user, password: text })}
        />
        <CustomButton
          disabled={loading}
          title="Sign In"
          onPress={() => login(user)}
        />
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
  mainView: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 12,
    flex: 0.5,
  },
});

export default LoginScreen;
