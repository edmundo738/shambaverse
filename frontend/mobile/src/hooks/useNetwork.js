import { useEffect, useState } from 'react';

export const useNetwork = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    setIsConnected(true);
  }, []);

  return { isConnected };
};
