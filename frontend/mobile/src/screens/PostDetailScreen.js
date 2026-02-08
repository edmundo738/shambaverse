import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PostDetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhe do Post</Text>
      <Text style={styles.text}>Conteúdo detalhado em construção.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#e6edf3',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  text: {
    color: '#7d8590',
    fontSize: 14,
  },
});
