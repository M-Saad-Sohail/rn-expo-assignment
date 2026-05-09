import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { theme } from '@/constants/theme';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'ghost';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export function AppButton({
  title,
  onPress,
  disabled = false,
  variant = 'primary',
  style,
  textStyle,
}: AppButtonProps) {
  const isGhost = variant === 'ghost';

  return (
    <TouchableOpacity
      activeOpacity={0.84}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        isGhost ? styles.ghostButton : styles.primaryButton,
        disabled && styles.disabledButton,
        style,
      ]}>
      <Text style={[styles.title, isGhost && styles.ghostTitle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: theme.radius.md,
    height: 54,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    ...theme.shadows.button,
  },
  ghostButton: {
    backgroundColor: theme.colors.chip,
    borderColor: theme.colors.border,
    borderWidth: 1,
  },
  disabledButton: {
    opacity: 0.6,
  },
  title: {
    color: theme.colors.background,
    fontSize: theme.fontSize.md,
    fontWeight: '900',
  },
  ghostTitle: {
    color: theme.colors.primary,
  },
});

export default AppButton;
