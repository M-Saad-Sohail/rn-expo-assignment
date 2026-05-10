import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/AppButton';
import { AppInput } from '@/components/AppInput';
import { theme } from '@/constants/theme';

type SignupErrors = {
  fullName?: string;
  email?: string;
  password?: string;
};

export default function SignupScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<SignupErrors>({});
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    const nextErrors: SignupErrors = {};

    if (!fullName.trim()) {
      nextErrors.fullName = 'Full name is required.';
    }

    if (!email.trim()) {
      nextErrors.email = 'Email is required.';
    }

    if (!password.trim()) {
      nextErrors.password = 'Password is required.';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.replace({
        pathname: '/',
        params: {
          email: email.trim(),
          password,
          name: fullName.trim(),
        },
      });
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}>
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={styles.headerRow}>
            <TouchableOpacity activeOpacity={0.78} onPress={() => router.replace('/')} style={styles.backButton}>
              <Ionicons color={theme.colors.text} name="arrow-back" size={20} />
            </TouchableOpacity>
            <View>
              <Text style={styles.headerSmall}>New workspace</Text>
              <Text style={styles.headerTitle}>Signup</Text>
            </View>
          </View>

          <View style={styles.previewCard}>
            <View style={styles.previewBadge}>
              <Ionicons color={theme.colors.ink} name="color-palette" size={24} />
            </View>
            <Text style={styles.previewTitle}>Create your build profile</Text>
            <Text style={styles.previewText}>
              Add your details once, then return to login with everything prefilled.
            </Text>
          </View>

          <View style={styles.formCard}>
            <View style={styles.form}>
              <AppInput
                autoCapitalize="words"
                error={errors.fullName}
                label="Full name"
                onChangeText={(value) => {
                  setFullName(value);
                  setErrors((current) => ({ ...current, fullName: undefined }));
                }}
                placeholder="Aleena Fatima"
                value={fullName}
              />
              <AppInput
                error={errors.email}
                keyboardType="email-address"
                label="Email"
                onChangeText={(value) => {
                  setEmail(value);
                  setErrors((current) => ({ ...current, email: undefined }));
                }}
                placeholder="aleena@example.com"
                value={email}
              />
              <AppInput
                error={errors.password}
                label="Password"
                onChangeText={(value) => {
                  setPassword(value);
                  setErrors((current) => ({ ...current, password: undefined }));
                }}
                placeholder="Create password"
                secureTextEntry
                value={password}
              />
            </View>

            <AppButton
              disabled={loading}
              onPress={handleSignup}
              title={loading ? 'Creating account...' : 'Signup'}
            />

            <TouchableOpacity activeOpacity={0.75} onPress={() => router.replace('/')} style={styles.loginLink}>
              <Text style={styles.loginText}>Back to login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    gap: theme.spacing.lg,
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
  },
  headerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing.md,
    paddingTop: theme.spacing.sm,
  },
  backButton: {
    alignItems: 'center',
    backgroundColor: theme.colors.chip,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    height: 46,
    justifyContent: 'center',
    width: 46,
  },
  headerSmall: {
    color: theme.colors.accent,
    fontSize: theme.fontSize.xs,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  headerTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.xl,
    fontWeight: '900',
    letterSpacing: 0,
  },
  previewCard: {
    backgroundColor: theme.colors.primarySoft,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    padding: theme.spacing.lg,
    ...theme.shadows.card,
  },
  previewBadge: {
    alignItems: 'center',
    backgroundColor: theme.colors.gold,
    borderRadius: theme.radius.lg,
    height: 56,
    justifyContent: 'center',
    marginBottom: theme.spacing.lg,
    width: 56,
  },
  previewTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.xl,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 34,
  },
  previewText: {
    color: theme.colors.mutedText,
    fontSize: theme.fontSize.md,
    lineHeight: 24,
    marginTop: theme.spacing.sm,
  },
  formCard: {
    backgroundColor: theme.colors.card,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    gap: theme.spacing.lg,
    padding: theme.spacing.lg,
  },
  form: {
    gap: theme.spacing.md,
  },
  loginLink: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xs,
  },
  loginText: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.sm,
    fontWeight: '900',
  },
});
