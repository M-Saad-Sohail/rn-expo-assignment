import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { theme } from '@/constants/theme';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'soft';
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
  const isSoft = variant === 'soft';

  return (
    <TouchableOpacity
      activeOpacity={0.84}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        isSoft ? styles.softButton : styles.primaryButton,
        disabled && styles.disabledButton,
        style,
      ]}>
      <Text style={[styles.title, isSoft && styles.softTitle, textStyle]}>{title}</Text>
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
  softButton: {
    backgroundColor: theme.colors.chip,
    borderColor: theme.colors.border,
    borderWidth: 1,
  },
  disabledButton: {
    opacity: 0.6,
  },
  title: {
    color: theme.colors.ink,
    fontSize: theme.fontSize.md,
    fontWeight: '900',
  },
  softTitle: {
    color: theme.colors.text,
  },
});

export default AppButton;
