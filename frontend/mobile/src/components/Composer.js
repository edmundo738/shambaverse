import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export const Composer = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Compartilhe uma atualização com a comunidade"
        placeholderTextColor="#7d8590"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#0d1117',
    borderBottomWidth: 1,
    borderBottomColor: '#30363d',
  },
  input: {
    backgroundColor: '#161b22',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#e6edf3',
  },
});
