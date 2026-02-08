import { useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  const signIn = (payload) => {
    setUser(payload);
  };

  const signOut = () => {
    setUser(null);
  };

  return { user, signIn, signOut };
};
