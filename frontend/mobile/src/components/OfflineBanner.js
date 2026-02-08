import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const OfflineBanner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você está offline. Algumas funções podem estar limitadas.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#da3633',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
