import React, { createContext, useContext } from 'react';
import Theme from '.';

interface ThemeContextProps {
  theme: Theme;
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeContextProps> = ({ theme, children }) => {
  return <ThemeContext.Provider value={{ theme, children }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): Theme => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return themeContext.theme;
};
