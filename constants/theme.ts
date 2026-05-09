import { Platform } from 'react-native';

export const theme = {
  colors: {
    primary: '#2563EB',
    primaryDark: '#1D4ED8',
    primarySoft: '#DBEAFE',
    background: '#F8FBFF',
    backgroundSoft: '#EAF3FF',
    card: '#FFFFFF',
    text: '#0F172A',
    mutedText: '#64748B',
    border: '#D9E7FF',
    success: '#16A34A',
    successSoft: '#DCFCE7',
    danger: '#DC2626',
    dangerSoft: '#FEE2E2',
    inputBackground: '#F8FAFC',
    white: '#FFFFFF',
    sky: '#E0F2FE',
    blueMist: '#EFF6FF',
    iconBackground: '#EEF4FF',
    code: '#172554',
    warning: '#F59E0B',
  },
  spacing: {
    xs: 6,
    sm: 10,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 44,
  },
  radius: {
    sm: 10,
    md: 14,
    lg: 20,
    xl: 28,
    pill: 999,
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 28,
    xxl: 36,
  },
  shadows: {
    card:
      Platform.select({
        ios: {
          shadowColor: '#1E3A8A',
          shadowOffset: { width: 0, height: 12 },
          shadowOpacity: 0.12,
          shadowRadius: 20,
        },
        android: {
          elevation: 5,
        },
        default: {
          shadowColor: '#1E3A8A',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.1,
          shadowRadius: 16,
        },
      }) ?? {},
    button:
      Platform.select({
        ios: {
          shadowColor: '#2563EB',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.2,
          shadowRadius: 12,
        },
        android: {
          elevation: 3,
        },
        default: {
          shadowColor: '#2563EB',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.18,
          shadowRadius: 10,
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
    text: theme.colors.white,
    background: theme.colors.code,
    tint: theme.colors.white,
    icon: theme.colors.backgroundSoft,
    tabIconDefault: theme.colors.backgroundSoft,
    tabIconSelected: theme.colors.white,
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
