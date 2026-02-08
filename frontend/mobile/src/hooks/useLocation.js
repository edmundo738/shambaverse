import { useState } from 'react';

export const useLocation = () => {
  const [location, setLocation] = useState(null);

  const updateLocation = (coords) => {
    setLocation(coords);
  };

  return { location, updateLocation };
};
