import React from 'react';

export const TransportCard = ({ service }) => {
  return (
    <article style={styles.container}>
      <h3 style={styles.title}>{service.title}</h3>
      <p style={styles.meta}>{service.route}</p>
      <p style={styles.meta}>Capacidade: {service.capacity}</p>
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
  meta: {
    color: '#7d8590',
    margin: '0.25rem 0 0',
  },
};
