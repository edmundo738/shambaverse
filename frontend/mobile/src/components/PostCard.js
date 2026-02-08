import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const PostCard = ({ post, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.author}>{post.author}</Text>
      <Text style={styles.content}>{post.content}</Text>
      <Text style={styles.meta}>{post.timestamp}</Text>
    </TouchableOpacity>
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
  author: {
    color: '#e6edf3',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  content: {
    color: '#c9d1d9',
    fontSize: 14,
    marginBottom: 8,
  },
  meta: {
    color: '#7d8590',
    fontSize: 12,
  },
});
