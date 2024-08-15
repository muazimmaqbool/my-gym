import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import App from "../src/App"

export default function TabLayout() {
 
  return (
    <PaperProvider>
     <App />
  </PaperProvider>
  );
}

