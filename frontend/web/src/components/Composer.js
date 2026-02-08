import React from 'react';

export const Composer = () => {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Compartilhe uma atualização com a comunidade"
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
    borderBottom: '1px solid #30363d',
    backgroundColor: '#0d1117',
  },
  input: {
    width: '100%',
    padding: '0.6rem 0.8rem',
    borderRadius: 8,
    border: '1px solid #30363d',
    backgroundColor: '#161b22',
    color: '#e6edf3',
  },
};
