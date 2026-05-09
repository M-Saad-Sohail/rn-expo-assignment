import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { theme } from "@/constants/theme";

type IoniconName = keyof typeof Ionicons.glyphMap;

type DashboardCard = {
  icon: IoniconName;
  label: string;
  title: string;
  body: string;
};

const dashboardCards: DashboardCard[] = [
  {
    icon: "pulse",
    label: "Developer Status",
    title: "Focused mode",
    body: "Building cool things, one component at a time.",
  },
  {
    icon: "flash",
    label: "Today's Coding Energy",
    title: "High voltage",
    body: "Code, coffee, and controlled chaos.",
  },
  {
    icon: "bug",
    label: "Debugging Mood",
    title: "Calm detective",
    body: "Today's mission: fix bugs without creating new ones.",
  },
  {
    icon: "chatbubble-ellipses",
    label: "Funny Coding Quote",
    title: "Truth bomb",
    body: "Console.log is still a valid emotional support tool.",
  },
];

const quickGoals = [
  "Refactor one messy screen",
  "Push clean commits",
  "Drink water before another coffee",
];

export default function HomeScreen() {
  const params = useLocalSearchParams<{ name?: string }>();
  const displayName = params.name?.trim() || "Shahrukh Shah";

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.headerIcon}>
              <Ionicons
                color={theme.colors.background}
                name="code-slash"
                size={28}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.78}
              onPress={() => router.replace("/")}
              style={styles.logoutButton}
            >
              <Ionicons
                color={theme.colors.primary}
                name="log-out-outline"
                size={18}
              />
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.greeting}>Heyy {displayName} 👋</Text>
          <Text style={styles.headerCopy}>
            Your workspace is warmed up. Pick a goal, open the editor, and make
            something neat.
          </Text>

          <View style={styles.commandBar}>
            <Text style={styles.commandPrompt}>~/today</Text>
            <Text style={styles.commandText}>npm run build-confidence</Text>
          </View>
        </View>

        <View style={styles.grid}>
          {dashboardCards.map((card) => (
            <View key={card.label} style={styles.infoCard}>
              <View style={styles.cardTop}>
                <View style={styles.cardIcon}>
                  <Ionicons
                    color={theme.colors.primary}
                    name={card.icon}
                    size={21}
                  />
                </View>
                <Text style={styles.cardLabel}>{card.label}</Text>
              </View>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardBody}>{card.body}</Text>
            </View>
          ))}
        </View>

        <View style={styles.goalsCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Quick Goals</Text>
            <Ionicons color={theme.colors.accent} name="rocket" size={22} />
          </View>
          {quickGoals.map((goal, index) => (
            <View key={goal} style={styles.goalRow}>
              <View style={styles.goalNumber}>
                <Text style={styles.goalNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </View>

        <View style={styles.footerCard}>
          <Text style={styles.footerTitle}>Tiny reminder</Text>
          <Text style={styles.footerText}>
            Clean UI, clear state, readable code. That is a pretty solid stack
            for today.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  content: {
    gap: theme.spacing.lg,
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
  },
  header: {
    backgroundColor: theme.colors.cardAlt,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    padding: theme.spacing.lg,
    ...theme.shadows.card,
  },
  headerTop: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing.xl,
  },
  headerIcon: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    height: 54,
    justifyContent: "center",
    width: 54,
  },
  logoutButton: {
    alignItems: "center",
    backgroundColor: theme.colors.chip,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    flexDirection: "row",
    gap: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  logoutText: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.sm,
    fontWeight: "900",
  },
  greeting: {
    color: theme.colors.text,
    fontSize: theme.fontSize.xl,
    fontWeight: "900",
    letterSpacing: 0,
    lineHeight: 36,
  },
  headerCopy: {
    color: theme.colors.mutedText,
    fontSize: theme.fontSize.md,
    lineHeight: 24,
    marginTop: theme.spacing.sm,
  },
  commandBar: {
    backgroundColor: theme.colors.inputBackground,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    gap: theme.spacing.xs,
    marginTop: theme.spacing.lg,
    padding: theme.spacing.md,
  },
  commandPrompt: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.xs,
    fontWeight: "900",
  },
  commandText: {
    color: theme.colors.text,
    fontSize: theme.fontSize.sm,
    fontWeight: "800",
  },
  grid: {
    gap: theme.spacing.md,
  },
  infoCard: {
    backgroundColor: theme.colors.card,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    gap: theme.spacing.sm,
    padding: theme.spacing.lg,
  },
  cardTop: {
    alignItems: "center",
    flexDirection: "row",
    gap: theme.spacing.sm,
  },
  cardIcon: {
    alignItems: "center",
    backgroundColor: theme.colors.chip,
    borderRadius: theme.radius.md,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
  cardLabel: {
    color: theme.colors.mutedText,
    flex: 1,
    fontSize: theme.fontSize.xs,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  cardTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.lg,
    fontWeight: "900",
    letterSpacing: 0,
  },
  cardBody: {
    color: theme.colors.mutedText,
    fontSize: theme.fontSize.sm,
    lineHeight: 22,
  },
  goalsCard: {
    backgroundColor: theme.colors.cardAlt,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    gap: theme.spacing.md,
    padding: theme.spacing.lg,
  },
  sectionHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.lg,
    fontWeight: "900",
    letterSpacing: 0,
  },
  goalRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: theme.spacing.md,
  },
  goalNumber: {
    alignItems: "center",
    backgroundColor: theme.colors.accentSoft,
    borderColor: theme.colors.accent,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    height: 34,
    justifyContent: "center",
    width: 34,
  },
  goalNumberText: {
    color: theme.colors.text,
    fontSize: theme.fontSize.sm,
    fontWeight: "900",
  },
  goalText: {
    color: theme.colors.text,
    flex: 1,
    fontSize: theme.fontSize.sm,
    fontWeight: "700",
    lineHeight: 21,
  },
  footerCard: {
    backgroundColor: theme.colors.primarySoft,
    borderColor: theme.colors.primaryDark,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    padding: theme.spacing.lg,
  },
  footerTitle: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.md,
    fontWeight: "900",
    marginBottom: theme.spacing.xs,
  },
  footerText: {
    color: theme.colors.text,
    fontSize: theme.fontSize.sm,
    fontWeight: "700",
    lineHeight: 22,
  },
});
