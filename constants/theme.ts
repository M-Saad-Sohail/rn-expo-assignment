import { Platform } from 'react-native';

export const theme = {
  colors: {
    deepGreen: '#155E52',
    deepGreenPressed: '#0F4C43',
    darkGreenText: '#163D36',
    mint: '#9EDFCB',
    mintDark: '#70C7AE',
    lightMint: '#E4F6F0',
    cream: '#FFF8ED',
    lavender: '#EDE7FA',
    coral: '#FF877C',
    lightCoral: '#FFE4DF',
    white: '#FFFFFF',
    text: '#18342F',
    mutedText: '#687A75',
    border: '#D9E7E2',
    disabled: '#B9C8C3',
    danger: '#B7443F',
    gold: '#E6B84A',
    paleGold: '#FFF0C6',
    tabInactive: '#80918C',

    // Backward-compatible aliases for the starter components that remain in the project.
    primary: '#155E52',
    primaryDark: '#0F4C43',
    primarySoft: '#E4F6F0',
    accent: '#FF877C',
    accentDark: '#B7443F',
    accentSoft: '#FFE4DF',
    background: '#FFF8ED',
    backgroundSoft: '#E4F6F0',
    card: '#FFFFFF',
    cardAlt: '#E4F6F0',
    success: '#155E52',
    inputBackground: '#F8FCFA',
    chip: '#F1F8F5',
    ink: '#163D36',
    graphite: '#F3F7F5',
  },
  spacing: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 28,
    xxl: 40,
    xxxl: 52,
  },
  radius: {
    sm: 12,
    md: 16,
    lg: 20,
    xl: 26,
    xxl: 32,
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
          shadowColor: '#163D36',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.09,
          shadowRadius: 20,
        },
        android: {
          elevation: 4,
        },
        default: {
          shadowColor: '#163D36',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.08,
          shadowRadius: 16,
        },
      }) ?? {},
    button:
      Platform.select({
        ios: {
          shadowColor: '#155E52',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.18,
          shadowRadius: 14,
        },
        android: {
          elevation: 3,
        },
        default: {
          shadowColor: '#155E52',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.15,
          shadowRadius: 12,
        },
      }) ?? {},
  },
};

export type AppTheme = typeof theme;

export const Colors = {
  light: {
    text: theme.colors.text,
    background: theme.colors.cream,
    tint: theme.colors.deepGreen,
    icon: theme.colors.mutedText,
    tabIconDefault: theme.colors.tabInactive,
    tabIconSelected: theme.colors.deepGreen,
  },
  dark: {
    text: theme.colors.text,
    background: theme.colors.cream,
    tint: theme.colors.deepGreen,
    icon: theme.colors.mutedText,
    tabIconDefault: theme.colors.tabInactive,
    tabIconSelected: theme.colors.deepGreen,
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
