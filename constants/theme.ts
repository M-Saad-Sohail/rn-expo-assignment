import { Platform } from 'react-native';

export const theme = {
  colors: {
    primary: '#22D3EE',
    primaryDark: '#0891B2',
    primarySoft: '#164E63',
    accent: '#A855F7',
    accentSoft: '#3B1D63',
    background: '#080A1A',
    backgroundSoft: '#11142C',
    card: '#14172F',
    cardAlt: '#1B1E3D',
    text: '#F8FAFC',
    mutedText: '#A5B4C8',
    border: '#2D335F',
    success: '#34D399',
    danger: '#FB7185',
    inputBackground: '#0E1126',
    white: '#FFFFFF',
    chip: '#20264D',
    glow: '#67E8F9',
    warning: '#FBBF24',
  },
  spacing: {
    xs: 6,
    sm: 10,
    md: 16,
    lg: 22,
    xl: 30,
    xxl: 42,
  },
  radius: {
    sm: 8,
    md: 14,
    lg: 18,
    xl: 26,
    pill: 999,
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 28,
    xxl: 38,
  },
  shadows: {
    card:
      Platform.select({
        ios: {
          shadowColor: '#22D3EE',
          shadowOffset: { width: 0, height: 14 },
          shadowOpacity: 0.14,
          shadowRadius: 22,
        },
        android: {
          elevation: 5,
        },
        default: {
          shadowColor: '#22D3EE',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.12,
          shadowRadius: 18,
        },
      }) ?? {},
    button:
      Platform.select({
        ios: {
          shadowColor: '#22D3EE',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.28,
          shadowRadius: 14,
        },
        android: {
          elevation: 4,
        },
        default: {
          shadowColor: '#22D3EE',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.22,
          shadowRadius: 12,
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
