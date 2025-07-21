import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

type LoginFormProps = {
  onSwitch: () => void;
};

export default function LoginForm({ onSwitch }: LoginFormProps) {
  const [contactInput, setContactInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Hardcoded valid credentials for demo
  const registeredContact = '09123456789';
  const registeredPassword = 'test1234';

  const handleLogin = () => {
    setShowDetails(true);
    if (contactInput === registeredContact && passwordInput === registeredPassword) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setContactInput('');
    setPasswordInput('');
    setShowDetails(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Login Form</Text>

      {!isLoggedIn && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter contact number"
            value={contactInput}
            onChangeText={setContactInput}
            keyboardType="phone-pad"
          />

          <TextInput
            style={styles.input}
            placeholder="Enter password"
            value={passwordInput}
            onChangeText={setPasswordInput}
            secureTextEntry={true} // password censored while typing
          />

          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>

          <Pressable onPress={onSwitch} style={styles.switchButton}>
            <Text style={styles.switchText}>Don't have an account? Register here</Text>
          </Pressable>
        </>
      )}

      {isLoggedIn && (
        <View style={styles.output}>
          <Text style={styles.outputTitle}>Logged In As:</Text>
          <Text>Contact Number: {contactInput}</Text>
          <Text>Password: {passwordInput}</Text>

          <Pressable style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </Pressable>
        </View>
      )}

      {!isLoggedIn && showDetails && (
        <View style={styles.output}>
          <Text style={styles.outputTitle}>Inputted Details:</Text>
          <Text>Contact Number: {contactInput || '-'}</Text>
          <Text>Password: {passwordInput || '-'}</Text> {/* Password shown in plain text here */}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#01060cff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  logoutButton: { backgroundColor: '#ff5c5c' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  output: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  outputTitle: { fontWeight: 'bold', marginBottom: 5, fontSize: 18 },
  switchButton: { marginTop: 10, alignItems: 'center' },
  switchText: { color: '#007bff', textDecorationLine: 'underline' },
});
