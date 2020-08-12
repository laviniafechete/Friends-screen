import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

import Header from './components/header/Header'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
