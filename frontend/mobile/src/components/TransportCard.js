import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const TransportCard = ({ service }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{service.title}</Text>
      <Text style={styles.meta}>{service.route}</Text>
      <Text style={styles.meta}>Capacidade: {service.capacity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161b22',
    borderRadius: 12,
    padding: 16,
    margin: 12,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  title: {
    color: '#e6edf3',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  meta: {
    color: '#7d8590',
    fontSize: 13,
  },
});
