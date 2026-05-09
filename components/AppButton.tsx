import { ActivityIndicator, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { theme } from '@/constants/theme';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export function AppButton({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = 'primary',
  style,
  textStyle,
}: AppButtonProps) {
  const isDisabled = disabled || loading;
  const isSecondary = variant === 'secondary';

  return (
    <TouchableOpacity
      activeOpacity={0.86}
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.button,
        isSecondary ? styles.secondaryButton : styles.primaryButton,
        isDisabled && styles.disabledButton,
        style,
      ]}>
      {loading ? (
        <ActivityIndicator color={isSecondary ? theme.colors.primary : theme.colors.white} />
      ) : (
        <Text style={[styles.title, isSecondary && styles.secondaryTitle, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: theme.radius.lg,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    ...theme.shadows.button,
  },
  secondaryButton: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.border,
    borderWidth: 1,
  },
  disabledButton: {
    opacity: 0.68,
  },
  title: {
    color: theme.colors.white,
    fontSize: theme.fontSize.md,
    fontWeight: '800',
  },
  secondaryTitle: {
    color: theme.colors.primary,
  },
});

export default AppButton;
