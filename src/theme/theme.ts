import {
  DarkTheme,
  DefaultTheme,
  useTheme as useThemeBase,
} from '@react-navigation/native';

export const FitTheme = {
  ...DarkTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#D0FD3E',
    subtext: '#BDBDBD',
    background: '#252525',
    alt: '#333333',
    grey3: '#828282',
  },
  mgreen: '#D0FD3E',
};

export type Theme = typeof FitTheme;
export const useTheme = (): Theme => useThemeBase() as Theme;
