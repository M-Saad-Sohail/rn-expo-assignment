import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useCallback, useState } from "react";
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

type SignupErrors = {
  fullName?: string;
  email?: string;
  password?: string;
};

type ToastState = {
  visible: boolean;
  message: string;
  type: "success" | "error";
};

export default function SignupScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<SignupErrors>({});
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

  const handleSignup = () => {
    const nextErrors: SignupErrors = {};

    if (!fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!email.trim()) {
      nextErrors.email = "Please enter your email address.";
    }

    if (!password.trim()) {
      nextErrors.password = "Please create a password.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      showToast(
        "Almost there. Please complete the highlighted fields.",
        "error",
      );
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      showToast("Successfully signed up. Now log in!", "success");

      setTimeout(() => {
        router.replace({
          pathname: "/",
          params: {
            email: email.trim(),
            password,
            name: fullName.trim(),
            signupSuccess: "true",
          },
        });
      }, 850);
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

          <TouchableOpacity
            activeOpacity={0.78}
            onPress={() => router.replace("/")}
            style={styles.backButton}
          >
            <Ionicons
              color={theme.colors.primary}
              name="arrow-back"
              size={20}
            />
            <Text style={styles.backText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.hero}>
            <View style={styles.logoBadge}>
              <Ionicons
                color={theme.colors.primary}
                name="sparkles"
                size={30}
              />
            </View>
            <Text style={styles.heroTitle}>Create your account</Text>
            <Text style={styles.heroSubtitle}>
              A friendly setup screen for your Expo Router auth flow.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Signup</Text>
            {/* <Text style={styles.cardSubtitle}>
              Your details stay in simple React state for this assignment.
            </Text> */}

            <View style={styles.form}>
              <AppInput
                autoCapitalize="words"
                error={errors.fullName}
                label="Full name"
                onChangeText={(value) => {
                  setFullName(value);
                  setErrors((current) => ({ ...current, fullName: undefined }));
                }}
                placeholder="Saad Sohail"
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
                placeholder="saad@example.com"
                value={email}
              />
              <AppInput
                error={errors.password}
                label="Password"
                onChangeText={(value) => {
                  setPassword(value);
                  setErrors((current) => ({ ...current, password: undefined }));
                }}
                placeholder="Create a password"
                secureTextEntry
                value={password}
              />
            </View>

            <AppButton
              loading={loading}
              onPress={handleSignup}
              title="Signup"
            />

            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Already have an account?</Text>
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => router.replace("/")}
              >
                <Text style={styles.linkText}>Login</Text>
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
    backgroundColor: theme.colors.backgroundSoft,
    borderBottomLeftRadius: theme.radius.xl,
    borderBottomRightRadius: theme.radius.xl,
    height: 300,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  backgroundLayerSoft: {
    backgroundColor: theme.colors.primarySoft,
    borderBottomLeftRadius: theme.radius.xl,
    borderBottomRightRadius: theme.radius.xl,
    height: 226,
    left: 0,
    opacity: 0.78,
    position: "absolute",
    right: 0,
    top: 74,
  },
  backButton: {
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    flexDirection: "row",
    gap: theme.spacing.xs,
    marginTop: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  backText: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.sm,
    fontWeight: "900",
  },
  hero: {
    alignItems: "center",
    paddingBottom: theme.spacing.xl,
    paddingTop: theme.spacing.lg,
  },
  logoBadge: {
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    borderWidth: 2,
    height: 70,
    justifyContent: "center",
    marginBottom: theme.spacing.md,
    width: 70,
    ...theme.shadows.card,
  },
  heroTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.xl,
    fontWeight: "900",
    letterSpacing: 0,
    textAlign: "center",
  },
  heroSubtitle: {
    color: theme.colors.mutedText,
    fontSize: theme.fontSize.md,
    lineHeight: 23,
    marginTop: theme.spacing.sm,
    maxWidth: 310,
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
    flexWrap: "wrap",
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
