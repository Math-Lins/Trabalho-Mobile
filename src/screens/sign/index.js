import React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";

export const Login = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.titleTxt}>Tagpet</Text>
      <TextInput style={styles.input} 
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <TextInput style={styles.input} 
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry
      />
      <Pressable style={styles.btn}>
        <Text style={styles.txtBtn}>sign in</Text>
      </Pressable>
      <View style={styles.subcontainer}>
        <Pressable style={styles.subbtn}>
          <Text style={styles.subtxtBtn}>Esqueci minha senha</Text>
        </Pressable>
        <Pressable style={styles.subbtn} >
          <Text style={styles.subtxtBtn}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleTxt: {
    paddingLeft: 30,
    fontSize: 30,
    fontWeight: "bold",
    color: "#5CB15A",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
    padding: 10,
    margin: 10,
  },
  btn: {
    backgroundColor: "#5CB15A",
    borderRadius: 10,
    width: "80%",
    padding: 10,
    margin: 10,
    alignItems: 'center'
  },
  txtBtn: {
    padding: 1,
    color: "white",
  },
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  subbtn: {
    padding: 10,
  },
  subtxtBtn: {
    color: '#ccc',
    fontWeight: 'bold'
  }
});
