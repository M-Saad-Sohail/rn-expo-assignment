import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
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

type LoginErrors = {
  email?: string;
  password?: string;
};

export default function LoginScreen() {
  const params = useLocalSearchParams<{
    email?: string;
    password?: string;
    name?: string;
  }>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('Shakaib Lodhi');
  const [errors, setErrors] = useState<LoginErrors>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (params.email) {
      setEmail(params.email);
    }

    if (params.password) {
      setPassword(params.password);
    }

    if (params.name) {
      setFullName(params.name);
    }
  }, [params.email, params.name, params.password]);

  const handleLogin = () => {
    const nextErrors: LoginErrors = {};

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
        pathname: '/home',
        params: { name: fullName.trim() || 'Shakaib Lodhi' },
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
          <View style={styles.topPanel}>
            <View style={styles.logoRow}>
              <View style={styles.logoBox}>
                <Ionicons color={theme.colors.ink} name="construct" size={27} />
              </View>
              <View>
                <Text style={styles.brandSmall}>Build Room</Text>
                <Text style={styles.brandTitle}>DevForge</Text>
              </View>
            </View>

            <Text style={styles.heroTitle}>Make the next screen count.</Text>
            <Text style={styles.heroText}>
              Login to continue your coding flow with simple state and clean navigation.
            </Text>
          </View>

          <View style={styles.formCard}>
            <View style={styles.formTitleRow}>
              <Text style={styles.formTitle}>Login</Text>
              <View style={styles.statusPill}>
                <Text style={styles.statusText}>Ready</Text>
              </View>
            </View>

            <View style={styles.form}>
              <AppInput
                error={errors.email}
                keyboardType="email-address"
                label="Email"
                onChangeText={(value) => {
                  setEmail(value);
                  setErrors((current) => ({ ...current, email: undefined }));
                }}
                placeholder="shakaib@example.com"
                value={email}
              />
              <AppInput
                error={errors.password}
                label="Password"
                onChangeText={(value) => {
                  setPassword(value);
                  setErrors((current) => ({ ...current, password: undefined }));
                }}
                placeholder="Enter password"
                secureTextEntry
                value={password}
              />
            </View>

            <AppButton
              disabled={loading}
              onPress={handleLogin}
              title={loading ? 'Logging in...' : 'Login'}
            />

            <View style={styles.switchRow}>
              <Text style={styles.switchText}>First time here?</Text>
              <TouchableOpacity activeOpacity={0.75} onPress={() => router.push('/signup')}>
                <Text style={styles.switchLink}>Create account</Text>
              </TouchableOpacity>
            </View>
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
    justifyContent: 'center',
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
  },
  topPanel: {
    backgroundColor: theme.colors.cardAlt,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    padding: theme.spacing.lg,
    ...theme.shadows.card,
  },
  logoRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
  logoBox: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.sm,
    height: 54,
    justifyContent: 'center',
    width: 54,
  },
  brandSmall: {
    color: theme.colors.accent,
    fontSize: theme.fontSize.xs,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  brandTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.lg,
    fontWeight: '900',
    letterSpacing: 0,
  },
  heroTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.xxl,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 44,
  },
  heroText: {
    color: theme.colors.mutedText,
    fontSize: theme.fontSize.md,
    lineHeight: 24,
    marginTop: theme.spacing.md,
  },
  formCard: {
    backgroundColor: theme.colors.card,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    gap: theme.spacing.lg,
    padding: theme.spacing.lg,
  },
  formTitleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.xl,
    fontWeight: '900',
    letterSpacing: 0,
  },
  statusPill: {
    backgroundColor: theme.colors.accentSoft,
    borderColor: theme.colors.accentDark,
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
  },
  statusText: {
    color: theme.colors.accent,
    fontSize: theme.fontSize.xs,
    fontWeight: '900',
  },
  form: {
    gap: theme.spacing.md,
  },
  switchRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.xs,
    justifyContent: 'center',
  },
  switchText: {
    color: theme.colors.mutedText,
    fontSize: theme.fontSize.sm,
    fontWeight: '700',
  },
  switchLink: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.sm,
    fontWeight: '900',
  },
});
