import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView } from 'react-native';
import MyStack from './Routes';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <MyStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
