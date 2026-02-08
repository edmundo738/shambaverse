import React from 'react';

export const AlertCard = ({ alert }) => {
  return (
    <article style={styles.container}>
      <h3 style={styles.title}>{alert.title}</h3>
      <p style={styles.description}>{alert.description}</p>
      <span style={styles.meta}>Severidade: {alert.severity}</span>
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
  title: {
    margin: 0,
    color: '#e6edf3',
  },
  description: {
    color: '#c9d1d9',
  },
  meta: {
    color: '#7d8590',
    fontSize: '0.8rem',
  },
};
