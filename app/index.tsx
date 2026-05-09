import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("Shahrukh Shah");
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
        pathname: "/home",
        params: { name: fullName.trim() || "Shahrukh Shah" },
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
          <View style={styles.orbitOne} />
          <View style={styles.orbitTwo} />

          <View style={styles.hero}>
            <View style={styles.brandRow}>
              <View style={styles.brandMark}>
                <Ionicons
                  color={theme.colors.background}
                  name="terminal"
                  size={25}
                />
              </View>
              <Text style={styles.brandName}>CodePulse</Text>
            </View>
            <Text style={styles.heroTitle}>Ship your next idea.</Text>
            <Text style={styles.heroSubtitle}>
              Sign in to open your coder dashboard and keep the momentum alive.
            </Text>
          </View>

          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <Text style={styles.panelEyebrow}>Access portal</Text>
              <Text style={styles.panelTitle}>Login</Text>
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
                placeholder="Enter password"
                secureTextEntry
                value={password}
              />
            </View>

            <AppButton
              disabled={loading}
              onPress={handleLogin}
              title={loading ? "Logging in..." : "Login"}
            />

            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Need an account?</Text>
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => router.push("/signup")}
              >
                <Text style={styles.linkText}>Signup</Text>
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
    justifyContent: "center",
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
  },
  orbitOne: {
    backgroundColor: theme.colors.accentSoft,
    borderRadius: 120,
    height: 240,
    opacity: 0.65,
    position: "absolute",
    right: -110,
    top: 38,
    width: 240,
  },
  orbitTwo: {
    backgroundColor: theme.colors.primarySoft,
    borderRadius: 95,
    bottom: 90,
    height: 190,
    left: -96,
    opacity: 0.55,
    position: "absolute",
    width: 190,
  },
  hero: {
    marginBottom: theme.spacing.xl,
  },
  brandRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xl,
  },
  brandMark: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md,
    height: 48,
    justifyContent: "center",
    width: 48,
  },
  brandName: {
    color: theme.colors.text,
    fontSize: theme.fontSize.lg,
    fontWeight: "900",
    letterSpacing: 0,
  },
  heroTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.xxl,
    fontWeight: "900",
    letterSpacing: 0,
    lineHeight: 45,
  },
  heroSubtitle: {
    color: theme.colors.mutedText,
    fontSize: theme.fontSize.md,
    lineHeight: 24,
    marginTop: theme.spacing.md,
    maxWidth: 320,
  },
  panel: {
    backgroundColor: theme.colors.card,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    gap: theme.spacing.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.card,
  },
  panelHeader: {
    gap: theme.spacing.xs,
  },
  panelEyebrow: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.xs,
    fontWeight: "900",
    letterSpacing: 0,
    textTransform: "uppercase",
  },
  panelTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.xl,
    fontWeight: "900",
    letterSpacing: 0,
  },
  form: {
    gap: theme.spacing.md,
  },
  footerRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: theme.spacing.xs,
    justifyContent: "center",
  },
  footerText: {
    color: theme.colors.mutedText,
    fontSize: theme.fontSize.sm,
    fontWeight: "700",
  },
  linkText: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.sm,
    fontWeight: "900",
  },
});
