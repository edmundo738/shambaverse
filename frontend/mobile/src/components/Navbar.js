import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Navbar = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#0d1117',
    borderBottomWidth: 1,
    borderBottomColor: '#30363d',
  },
  title: {
    color: '#e6edf3',
    fontSize: 18,
    fontWeight: '600',
  },
});
