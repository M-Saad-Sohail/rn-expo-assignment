import { Platform } from 'react-native';

export const theme = {
  colors: {
    primary: '#F472B6',
    primaryDark: '#DB2777',
    primarySoft: '#4A1430',
    accent: '#5EEAD4',
    accentDark: '#0F766E',
    accentSoft: '#123E3C',
    background: '#130B1F',
    backgroundSoft: '#211432',
    card: '#241832',
    cardAlt: '#2D1D42',
    text: '#FFF7FB',
    mutedText: '#C8B8D8',
    border: '#4A375F',
    success: '#86EFAC',
    danger: '#FDA4AF',
    inputBackground: '#1A1027',
    white: '#FFFFFF',
    chip: '#352349',
    ink: '#0F0718',
    gold: '#FDE68A',
  },
  spacing: {
    xs: 6,
    sm: 10,
    md: 16,
    lg: 22,
    xl: 30,
    xxl: 44,
  },
  radius: {
    sm: 10,
    md: 16,
    lg: 22,
    xl: 30,
    pill: 999,
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 28,
    xxl: 40,
  },
  shadows: {
    card:
      Platform.select({
        ios: {
          shadowColor: '#F472B6',
          shadowOffset: { width: 0, height: 16 },
          shadowOpacity: 0.16,
          shadowRadius: 24,
        },
        android: {
          elevation: 5,
        },
        default: {
          shadowColor: '#F472B6',
          shadowOffset: { width: 0, height: 12 },
          shadowOpacity: 0.13,
          shadowRadius: 20,
        },
      }) ?? {},
    button:
      Platform.select({
        ios: {
          shadowColor: '#F472B6',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 16,
        },
        android: {
          elevation: 4,
        },
        default: {
          shadowColor: '#F472B6',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.24,
          shadowRadius: 14,
        },
      }) ?? {},
  },
};

export type AppTheme = typeof theme;

export const Colors = {
  light: {
    text: theme.colors.text,
    background: theme.colors.background,
    tint: theme.colors.primary,
    icon: theme.colors.mutedText,
    tabIconDefault: theme.colors.mutedText,
    tabIconSelected: theme.colors.primary,
  },
  dark: {
    text: theme.colors.text,
    background: theme.colors.background,
    tint: theme.colors.primary,
    icon: theme.colors.mutedText,
    tabIconDefault: theme.colors.mutedText,
    tabIconSelected: theme.colors.primary,
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
