import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import LoginForm from './login';
import RegistrationForm from './registration';

export default function Layout() {
  const [showRegistration, setShowRegistration] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {showRegistration ? (
          <RegistrationForm onSwitch={() => setShowRegistration(false)} />
        ) : (
          <LoginForm onSwitch={() => setShowRegistration(true)} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, padding: 20, justifyContent: 'center' },
});
