import React from 'react';

export const Navbar = ({ title }) => {
  return (
    <header style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
    </header>
  );
};

const styles = {
  container: {
    padding: '1rem 1.5rem',
    backgroundColor: '#0d1117',
    borderBottom: '1px solid #30363d',
  },
  title: {
    margin: 0,
    color: '#e6edf3',
    fontSize: '1.25rem',
  },
};
