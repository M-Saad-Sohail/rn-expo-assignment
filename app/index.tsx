import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
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
import { ToastMessage } from "@/components/ToastMessage";
import { theme } from "@/constants/theme";

type LoginErrors = {
  email?: string;
  password?: string;
};

type ToastState = {
  visible: boolean;
  message: string;
  type: "success" | "error";
};

export default function LoginScreen() {
  const params = useLocalSearchParams<{
    email?: string;
    password?: string;
    name?: string;
    signupSuccess?: string;
  }>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("Saad Sohail");
  const [errors, setErrors] = useState<LoginErrors>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    message: "",
    type: "success",
  });

  const showToast = useCallback(
    (message: string, type: ToastState["type"] = "success") => {
      setToast({ visible: true, message, type });
      setTimeout(() => {
        setToast((current) =>
          current.message === message
            ? { ...current, visible: false }
            : current,
        );
      }, 2600);
    },
    [],
  );

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

    if (params.signupSuccess === "true") {
      showToast("Successfully signed up. Now log in!", "success");
    }
  }, [
    params.email,
    params.name,
    params.password,
    params.signupSuccess,
    showToast,
  ]);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setErrors((current) => ({ ...current, email: undefined }));
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setErrors((current) => ({ ...current, password: undefined }));
  };

  const handleLogin = () => {
    const nextErrors: LoginErrors = {};

    if (!email.trim()) {
      nextErrors.email = "Please enter your email address.";
    }

    if (!password.trim()) {
      nextErrors.password = "Please enter your password.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      showToast("A tiny detail is missing. Please check the form.", "error");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      showToast("Login successful!", "success");

      setTimeout(() => {
        router.replace({
          pathname: "/home",
          params: { name: fullName.trim() || "Saad Sohail" },
        });
      }, 750);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ToastMessage
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.backgroundLayer} />
          <View style={styles.backgroundLayerSoft} />

          <View style={styles.hero}>
            <View style={styles.logoBadge}>
              <Ionicons
                color={theme.colors.white}
                name="code-slash"
                size={32}
              />
            </View>
            <Text style={styles.appName}>DevDesk</Text>
            <Text style={styles.heroTitle}>Welcome back</Text>
            <Text style={styles.heroSubtitle}>
              Sign in and jump back into your coding playground.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Login</Text>
            {/* <Text style={styles.cardSubtitle}>Simple state auth for a clean Expo assignment.</Text> */}

            <View style={styles.form}>
              <AppInput
                error={errors.email}
                keyboardType="email-address"
                label="Email"
                onChangeText={handleEmailChange}
                placeholder="saad@example.com"
                value={email}
              />
              <AppInput
                error={errors.password}
                label="Password"
                onChangeText={handlePasswordChange}
                placeholder="Enter your password"
                secureTextEntry
                value={password}
              />
            </View>

            <AppButton loading={loading} onPress={handleLogin} title="Login" />

            <View style={styles.footerRow}>
              <Text style={styles.footerText}>New here?</Text>
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => router.push("/signup")}
              >
                <Text style={styles.linkText}>Create account</Text>
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
  scrollContent: {
    flexGrow: 1,
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
  },
  backgroundLayer: {
    backgroundColor: theme.colors.primary,
    borderBottomLeftRadius: theme.radius.xl,
    borderBottomRightRadius: theme.radius.xl,
    height: 270,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  backgroundLayerSoft: {
    backgroundColor: theme.colors.sky,
    borderBottomLeftRadius: theme.radius.xl,
    borderBottomRightRadius: theme.radius.xl,
    height: 326,
    left: 0,
    opacity: 0.62,
    position: "absolute",
    right: 0,
    top: 46,
  },
  hero: {
    alignItems: "center",
    paddingBottom: theme.spacing.xl,
    paddingTop: theme.spacing.lg,
  },
  logoBadge: {
    alignItems: "center",
    backgroundColor: theme.colors.primaryDark,
    borderColor: theme.colors.white,
    borderRadius: theme.radius.lg,
    borderWidth: 3,
    height: 72,
    justifyContent: "center",
    marginBottom: theme.spacing.md,
    width: 72,
  },
  appName: {
    color: theme.colors.primarySoft,
    fontSize: theme.fontSize.sm,
    fontWeight: "800",
    letterSpacing: 0,
    marginBottom: theme.spacing.xs,
    textTransform: "uppercase",
  },
  heroTitle: {
    color: theme.colors.white,
    fontSize: theme.fontSize.xxl,
    fontWeight: "900",
    letterSpacing: 0,
  },
  heroSubtitle: {
    color: theme.colors.blueMist,
    fontSize: theme.fontSize.md,
    lineHeight: 23,
    marginTop: theme.spacing.sm,
    maxWidth: 300,
    textAlign: "center",
  },
  card: {
    backgroundColor: theme.colors.card,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    gap: theme.spacing.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.card,
  },
  cardTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.xl,
    fontWeight: "900",
    letterSpacing: 0,
  },
  cardSubtitle: {
    color: theme.colors.mutedText,
    fontSize: theme.fontSize.sm,
    lineHeight: 20,
    marginTop: -theme.spacing.md,
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
    fontWeight: "600",
  },
  linkText: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.sm,
    fontWeight: "900",
  },
});
