import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transport</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d1117',
  },
  text: {
    color: '#e6edf3',
    fontSize: 18,
    fontWeight: '600',
  },
});
