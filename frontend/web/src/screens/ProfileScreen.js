import React from 'react';

export const ProfileScreen = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Profile</h2>
      <p style={styles.text}>Conteúdo em construção para Profile.</p>
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
