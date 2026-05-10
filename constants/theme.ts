import { Platform } from 'react-native';

export const theme = {
  colors: {
    primary: '#FBBF24',
    primaryDark: '#D97706',
    primarySoft: '#3F2E12',
    accent: '#34D399',
    accentDark: '#047857',
    accentSoft: '#113A2F',
    background: '#07130F',
    backgroundSoft: '#10231C',
    card: '#13241D',
    cardAlt: '#1A3027',
    text: '#F8FFF9',
    mutedText: '#A9BCAF',
    border: '#315345',
    success: '#6EE7B7',
    danger: '#F87171',
    inputBackground: '#0D1B16',
    white: '#FFFFFF',
    chip: '#213A30',
    ink: '#120D04',
    graphite: '#0A1511',
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
    sm: 8,
    md: 12,
    lg: 18,
    xl: 24,
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
          shadowColor: '#34D399',
          shadowOffset: { width: 0, height: 16 },
          shadowOpacity: 0.14,
          shadowRadius: 22,
        },
        android: {
          elevation: 5,
        },
        default: {
          shadowColor: '#34D399',
          shadowOffset: { width: 0, height: 12 },
          shadowOpacity: 0.12,
          shadowRadius: 18,
        },
      }) ?? {},
    button:
      Platform.select({
        ios: {
          shadowColor: '#FBBF24',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.26,
          shadowRadius: 14,
        },
        android: {
          elevation: 4,
        },
        default: {
          shadowColor: '#FBBF24',
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
