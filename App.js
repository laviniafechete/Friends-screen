import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

import Header from './components/header/Header'
import Body from './components/body/Body'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Header />
      <Body />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
