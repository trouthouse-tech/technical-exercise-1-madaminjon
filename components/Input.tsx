import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";

interface CustomInputProps extends TextInputProps {
  label: string;
  inputStyle?: object;
  labelStyle?: object;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  inputStyle,
  labelStyle,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput
        autoComplete="off"
        autoCorrect={false}
        autoCapitalize="none"
        spellCheck={false}
        textContentType="none"
        style={[styles.input, inputStyle]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: "#000",
    marginBottom: 5,
  },
  input: {
    width: 120,
    height: 22,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#000",
    paddingHorizontal: 5,
    backgroundColor: "#fff",
  },
});

export default CustomInput;
