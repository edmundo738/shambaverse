import React from 'react';

export const OfflineBanner = () => {
  return (
    <div style={styles.container}>
      <span style={styles.text}>Você está offline. Algumas funções podem estar limitadas.</span>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#da3633',
    padding: '0.5rem 1rem',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: '0.85rem',
    fontWeight: 600,
  },
};
