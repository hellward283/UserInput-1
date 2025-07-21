import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

type RegistrationFormProps = {
  onSwitch: () => void;
};

export default function RegistrationForm({ onSwitch }: RegistrationFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name && email && contact && password) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleClear = () => {
    setName('');
    setEmail('');
    setContact('');
    setPassword('');
    setSubmitted(false);
  };

  return (
    <ScrollView>
      <Text style={styles.title}>User Registration Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your contact number"
        value={contact}
        onChangeText={setContact}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.clearButton]} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
        </Pressable>
      </View>

      {/* Switch to Login */}
      <Pressable onPress={onSwitch} style={styles.switchButton}>
        <Text style={styles.switchText}>Already have an account? Login here</Text>
      </Pressable>

      {submitted && (
        <View style={styles.output}>
          <Text style={styles.outputTitle}>Submitted Information:</Text>
          <Text>Name: {name}</Text>
          <Text>Email: {email}</Text>
          <Text>Contact Number: {contact}</Text>
          <Text>Password: {password}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 15,
  },
  buttonContainer: { marginBottom: 10 },
  button: {
    backgroundColor: '#007bff', padding: 15, borderRadius: 8, marginBottom: 10, alignItems: 'center',
  },
  clearButton: { backgroundColor: '#ff5c5c' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  output: { backgroundColor: '#f1f1f1', padding: 15, borderRadius: 8 },
  outputTitle: { fontWeight: 'bold', marginBottom: 5 },
  switchButton: { marginTop: 10, alignItems: 'center' },
  switchText: { color: '#007bff', textDecorationLine: 'underline' },
});
