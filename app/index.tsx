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
  const [fullName, setFullName] = useState('Aleena Fatima');
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
        params: { name: fullName.trim() || 'Aleena Fatima' },
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
          <View style={styles.glowTop} />
          <View style={styles.glowBottom} />

          <View style={styles.heroCard}>
            <View style={styles.heroTop}>
              <View style={styles.logoBubble}>
                <Ionicons color={theme.colors.ink} name="layers" size={28} />
              </View>
              <Text style={styles.brand}>PixelStack</Text>
            </View>
            <Text style={styles.heroTitle}>Design. Code. Repeat.</Text>
            <Text style={styles.heroText}>
              {"Log in to your cozy build space and keep today's ideas moving."}
            </Text>
          </View>

          <View style={styles.formCard}>
            <View style={styles.formHeader}>
              <Text style={styles.formLabel}>Welcome back</Text>
              <Text style={styles.formTitle}>Login</Text>
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
              <Text style={styles.switchText}>No profile yet?</Text>
              <TouchableOpacity activeOpacity={0.75} onPress={() => router.push('/signup')}>
                <Text style={styles.switchLink}>Create one</Text>
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
    justifyContent: 'center',
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
  },
  glowTop: {
    backgroundColor: theme.colors.primarySoft,
    borderRadius: 150,
    height: 260,
    left: -120,
    opacity: 0.72,
    position: 'absolute',
    top: -60,
    width: 260,
  },
  glowBottom: {
    backgroundColor: theme.colors.accentSoft,
    borderRadius: 130,
    bottom: 60,
    height: 220,
    opacity: 0.72,
    position: 'absolute',
    right: -118,
    width: 220,
  },
  heroCard: {
    backgroundColor: theme.colors.cardAlt,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    marginBottom: theme.spacing.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.card,
  },
  heroTop: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xl,
  },
  logoBubble: {
    alignItems: 'center',
    backgroundColor: theme.colors.accent,
    borderRadius: theme.radius.pill,
    height: 54,
    justifyContent: 'center',
    width: 54,
  },
  brand: {
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
    lineHeight: 46,
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
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    gap: theme.spacing.lg,
    padding: theme.spacing.lg,
  },
  formHeader: {
    gap: theme.spacing.xs,
  },
  formLabel: {
    color: theme.colors.accent,
    fontSize: theme.fontSize.xs,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  formTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.xl,
    fontWeight: '900',
    letterSpacing: 0,
  },
  form: {
    gap: theme.spacing.md,
  },
  switchRow: {
    alignItems: 'center',
    flexDirection: 'row',
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
