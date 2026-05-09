import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { theme } from "@/constants/theme";

type SignupErrors = {
  fullName?: string;
  email?: string;
  password?: string;
};

export default function SignupScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<SignupErrors>({});
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    const nextErrors: SignupErrors = {};

    if (!fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!email.trim()) {
      nextErrors.email = "Email is required.";
    }

    if (!password.trim()) {
      nextErrors.password = "Password is required.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.replace({
        pathname: "/",
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
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topBar}>
            <TouchableOpacity
              activeOpacity={0.78}
              onPress={() => router.replace("/")}
              style={styles.backButton}
            >
              <Ionicons
                color={theme.colors.primary}
                name="chevron-back"
                size={20}
              />
            </TouchableOpacity>
            <Text style={styles.topBarTitle}>New profile</Text>
          </View>

          <View style={styles.heroCard}>
            <View style={styles.heroIcon}>
              <Ionicons
                color={theme.colors.primary}
                name="sparkles"
                size={28}
              />
            </View>
            <Text style={styles.heroTitle}>Start a fresh dev session</Text>
            <Text style={styles.heroSubtitle}>
              Create a lightweight profile and jump back to login with your
              details ready.
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
                placeholder="Shahrukh Shah"
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
                placeholder="shahrukh@example.com"
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
              title={loading ? "Creating account..." : "Signup"}
            />

            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => router.replace("/")}
              style={styles.loginLink}
            >
              <Text style={styles.loginText}>Already have access? Login</Text>
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
  topBar: {
    alignItems: "center",
    flexDirection: "row",
    gap: theme.spacing.md,
    paddingTop: theme.spacing.sm,
  },
  backButton: {
    alignItems: "center",
    backgroundColor: theme.colors.chip,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    height: 44,
    justifyContent: "center",
    width: 44,
  },
  topBarTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.lg,
    fontWeight: "900",
    letterSpacing: 0,
  },
  heroCard: {
    backgroundColor: theme.colors.cardAlt,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    padding: theme.spacing.lg,
    ...theme.shadows.card,
  },
  heroIcon: {
    alignItems: "center",
    backgroundColor: theme.colors.accentSoft,
    borderColor: theme.colors.accent,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    height: 58,
    justifyContent: "center",
    marginBottom: theme.spacing.lg,
    width: 58,
  },
  heroTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.xl,
    fontWeight: "900",
    letterSpacing: 0,
    lineHeight: 34,
  },
  heroSubtitle: {
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
    alignItems: "center",
    paddingVertical: theme.spacing.xs,
  },
  loginText: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.sm,
    fontWeight: "900",
  },
});
