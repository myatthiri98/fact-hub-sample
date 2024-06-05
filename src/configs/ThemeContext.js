import React, { createContext, useState, useContext } from 'react';
import { lightTheme, darkTheme, eyeProtectionTheme } from '../constants/themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('auto');

  const getTheme = () => {
    switch (theme) {
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
      case 'eyeProtection':
        return eyeProtectionTheme;
      default:
        // logic to detect auto theme based on device settings
        return lightTheme;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, getTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
