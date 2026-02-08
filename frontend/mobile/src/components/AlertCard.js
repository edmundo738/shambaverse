import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AlertCard = ({ alert }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{alert.title}</Text>
      <Text style={styles.description}>{alert.description}</Text>
      <Text style={styles.meta}>Severidade: {alert.severity}</Text>
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
  description: {
    color: '#c9d1d9',
    fontSize: 13,
    marginBottom: 6,
  },
  meta: {
    color: '#7d8590',
    fontSize: 12,
  },
});
