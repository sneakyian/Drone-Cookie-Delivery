import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Welcome to Drone-Cookie-Delivery!</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 }
});

export default App;
