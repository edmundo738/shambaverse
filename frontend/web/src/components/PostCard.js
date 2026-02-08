import React from 'react';

export const PostCard = ({ post }) => {
  return (
    <article style={styles.container}>
      <h3 style={styles.author}>{post.author}</h3>
      <p style={styles.content}>{post.content}</p>
      <span style={styles.meta}>{post.timestamp}</span>
    </article>
  );
};

const styles = {
  container: {
    backgroundColor: '#161b22',
    borderRadius: 12,
    padding: '1rem',
    border: '1px solid #30363d',
  },
  author: {
    margin: 0,
    color: '#e6edf3',
    fontSize: '1rem',
  },
  content: {
    color: '#c9d1d9',
  },
  meta: {
    color: '#7d8590',
    fontSize: '0.8rem',
  },
};
