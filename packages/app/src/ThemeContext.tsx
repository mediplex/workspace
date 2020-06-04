import React from 'react';
import { createContext, useState, ReactNode, useMemo} from 'react';
import {
  Theme,
  responsiveFontSizes,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  ThemeOptions,
} from '@material-ui/core';
import { blue, pink } from '@material-ui/core/colors';

const initialCustomThemeOptions: ThemeOptions = {
  palette: {
    type: 'light',
  },
  shape: {
    borderRadius: 4 * 7,
  },
  typography: {
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.25rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '0.75rem',
    },
  },
};

const ThemeContext = createContext<{
  isDarkModeEnabled: boolean;
  toogleDarkMode: () => void;
}>({
  isDarkModeEnabled: false,
  toogleDarkMode: () => {},
});

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [customThemeOptions, setCustomThemeOption] = useState<ThemeOptions>(
    initialCustomThemeOptions
  );

  const toogleDarkMode = () =>
    setCustomThemeOption({
      ...customThemeOptions,
      palette: {
        ...customThemeOptions.palette,
        type: customThemeOptions.palette?.type === 'light' ? 'dark' : 'light',
      },
    });

  const customTheme: Theme = useMemo(() => {
    return responsiveFontSizes(
      createMuiTheme({
        ...customThemeOptions,
        palette: {
          ...customThemeOptions.palette,
          primary: {
            main:
              customThemeOptions.palette?.type === 'light'
                ? blue[800]
                : blue[900],
          },
          secondary: {
            main:
              customThemeOptions.palette?.type === 'light'
                ? pink[400]
                : pink[500],
          },
        },
      })
    );
  }, [customThemeOptions]);

  return (
    <ThemeContext.Provider
      value={{
        toogleDarkMode,
        isDarkModeEnabled: customTheme.palette.type === 'dark',
      }}
    >
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };