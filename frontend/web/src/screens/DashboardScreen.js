import React from 'react';

export const DashboardScreen = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Dashboard</h2>
      <p style={styles.text}>Conteúdo em construção para Dashboard.</p>
    </section>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#0d1117',
    color: '#e6edf3',
    minHeight: '100vh',
  },
  title: {
    marginTop: 0,
  },
  text: {
    color: '#7d8590',
  },
};
