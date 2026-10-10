import React, { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const THEME_STORAGE_KEY = 'dentiva-theme-preference';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // 1. Check if user has explicitly saved a theme preference before
    try {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
    } catch (e) {
      // fallback
    }
    // 2. Default to light theme for all new visitors
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch (e) {}
      return nextTheme;
    });
  };

  const handleSetTheme = (newTheme) => {
    if (newTheme === 'dark' || newTheme === 'light') {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      } catch (e) {}
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
