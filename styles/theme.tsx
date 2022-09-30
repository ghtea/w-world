import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import React from 'react'
import { palette } from './palette';

const theme = {
  colors: {
    ...palette,
    main: palette['primary-600'],
  },
} as const;

export type Theme = typeof theme;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
);