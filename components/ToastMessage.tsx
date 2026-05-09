import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from '@/constants/theme';

type ToastMessageProps = {
  visible: boolean;
  message: string;
  type?: 'success' | 'error';
};

export function ToastMessage({ visible, message, type = 'success' }: ToastMessageProps) {
  if (!visible) {
    return null;
  }

  const isSuccess = type === 'success';

  return (
    <View
      pointerEvents="none"
      style={[
        styles.toast,
        isSuccess ? styles.successToast : styles.errorToast,
      ]}>
      <Ionicons
        color={isSuccess ? theme.colors.success : theme.colors.danger}
        name={isSuccess ? 'checkmark-circle' : 'alert-circle'}
        size={20}
      />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  toast: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    flexDirection: 'row',
    gap: theme.spacing.sm,
    left: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    position: 'absolute',
    right: theme.spacing.lg,
    top: 18,
    zIndex: 10,
    ...theme.shadows.card,
  },
  successToast: {
    backgroundColor: theme.colors.successSoft,
    borderColor: theme.colors.success,
  },
  errorToast: {
    backgroundColor: theme.colors.dangerSoft,
    borderColor: theme.colors.danger,
  },
  message: {
    color: theme.colors.text,
    flex: 1,
    fontSize: theme.fontSize.sm,
    fontWeight: '700',
  },
});

export default ToastMessage;
