import React from 'react';
import {createContext, useState} from 'react';

export const FitnessContext = createContext(null);

export const FitnessProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <FitnessContext.Provider value={{isAuth, setIsAuth}}>
      {children}
    </FitnessContext.Provider>
  );
};
