import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Alert,
  Button,
} from "react-native";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) {
      Alert.alert("Por favor, insira seu e-mail");
      return;
    }

    Alert.alert(
      "E-mail enviado",
      "Por favor, verifique seu e-mail para resetar sua senha"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.forgot}>Esqueceu senha</Text>
      <Text style={styles.email}>
        Por favor, entre com seu e-mail para resetar sua senha
      </Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        onChangeText={setEmail}
      />
      <Button title="Enviar e-mail" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  forgot: {
    fontSize: 24,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#000",
    width: "80%",
    padding: 10,
  },
});
