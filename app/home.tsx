import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '@/constants/theme';

type IoniconName = keyof typeof Ionicons.glyphMap;

type DevCard = {
  icon: IoniconName;
  label: string;
  value: string;
};

const devCards: DevCard[] = [
  {
    icon: 'code-working',
    label: 'Developer Status',
    value: 'Building cool things, one component at a time.',
  },
  {
    icon: 'flash',
    label: "Today's Coding Energy",
    value: 'Code, coffee, and controlled chaos.',
  },
  {
    icon: 'bug',
    label: 'Debugging Mood',
    value: "Today's mission: fix bugs without creating new ones.",
  },
  {
    icon: 'chatbubble-ellipses',
    label: 'Funny Coding Quote',
    value: 'Console.log is still a valid emotional support tool.',
  },
];

const quickGoals = ['Keep components small', 'Fix one bug cleanly', 'Record one clear walkthrough'];

export default function HomeScreen() {
  const params = useLocalSearchParams<{ name?: string }>();
  const displayName = params.name?.trim() || 'Shakaib Lodhi';

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.namePlate}>
              <Text style={styles.namePlateText}>SL</Text>
            </View>
            <TouchableOpacity activeOpacity={0.78} onPress={() => router.replace('/')} style={styles.logoutButton}>
              <Text style={styles.logoutText}>Logout</Text>
              <Ionicons color={theme.colors.primary} name="exit-outline" size={18} />
            </TouchableOpacity>
          </View>

          <Text style={styles.greeting}>Heyy {displayName} 👋</Text>
          <Text style={styles.headerText}>
            Your workspace is online. Keep the logic simple and the interface sharp.
          </Text>
        </View>

        <View style={styles.missionCard}>
          <View style={styles.missionIcon}>
            <Ionicons color={theme.colors.ink} name="rocket" size={25} />
          </View>
          <View style={styles.missionTextBlock}>
            <Text style={styles.missionLabel}>{"Today's Mission"}</Text>
            <Text style={styles.missionTitle}>Fix bugs without creating new ones.</Text>
          </View>
        </View>

        <View style={styles.cardsWrap}>
          {devCards.map((card) => (
            <View key={card.label} style={styles.devCard}>
              <View style={styles.devCardTop}>
                <View style={styles.devIcon}>
                  <Ionicons color={theme.colors.accent} name={card.icon} size={21} />
                </View>
                <Text style={styles.devLabel}>{card.label}</Text>
              </View>
              <Text style={styles.devValue}>{card.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.goalsCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Quick Goals</Text>
            <Text style={styles.goalCount}>3 tasks</Text>
          </View>
          {quickGoals.map((goal, index) => (
            <View key={goal} style={styles.goalRow}>
              <Text style={styles.goalIndex}>0{index + 1}</Text>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </View>

        <View style={styles.quoteCard}>
          <Ionicons color={theme.colors.primary} name="terminal" size={22} />
          <Text style={styles.quoteText}>Console.log is still a valid emotional support tool.</Text>
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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl,
  },
  namePlate: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.sm,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  namePlateText: {
    color: theme.colors.ink,
    fontSize: theme.fontSize.md,
    fontWeight: '900',
  },
  logoutButton: {
    alignItems: 'center',
    backgroundColor: theme.colors.chip,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    flexDirection: 'row',
    gap: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  logoutText: {
    color: theme.colors.text,
    fontSize: theme.fontSize.sm,
    fontWeight: '800',
  },
  greeting: {
    color: theme.colors.text,
    fontSize: theme.fontSize.xl,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 36,
  },
  headerText: {
    color: theme.colors.mutedText,
    fontSize: theme.fontSize.md,
    lineHeight: 24,
    marginTop: theme.spacing.sm,
  },
  missionCard: {
    alignItems: 'center',
    backgroundColor: theme.colors.primarySoft,
    borderColor: theme.colors.primaryDark,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    gap: theme.spacing.md,
    padding: theme.spacing.lg,
  },
  missionIcon: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.sm,
    height: 52,
    justifyContent: 'center',
    width: 52,
  },
  missionTextBlock: {
    flex: 1,
  },
  missionLabel: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.xs,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  missionTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.md,
    fontWeight: '900',
    lineHeight: 22,
    marginTop: theme.spacing.xs,
  },
  cardsWrap: {
    gap: theme.spacing.md,
  },
  devCard: {
    backgroundColor: theme.colors.card,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    gap: theme.spacing.md,
    padding: theme.spacing.lg,
  },
  devCardTop: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  devIcon: {
    alignItems: 'center',
    backgroundColor: theme.colors.accentSoft,
    borderRadius: theme.radius.sm,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  devLabel: {
    color: theme.colors.accent,
    flex: 1,
    fontSize: theme.fontSize.xs,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  devValue: {
    color: theme.colors.text,
    fontSize: theme.fontSize.md,
    fontWeight: '800',
    lineHeight: 23,
  },
  goalsCard: {
    backgroundColor: theme.colors.cardAlt,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    gap: theme.spacing.md,
    padding: theme.spacing.lg,
  },
  sectionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.lg,
    fontWeight: '900',
    letterSpacing: 0,
  },
  goalCount: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.xs,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  goalRow: {
    alignItems: 'center',
    backgroundColor: theme.colors.graphite,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.sm,
    borderWidth: 1,
    flexDirection: 'row',
    gap: theme.spacing.md,
    padding: theme.spacing.md,
  },
  goalIndex: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.sm,
    fontWeight: '900',
  },
  goalText: {
    color: theme.colors.text,
    flex: 1,
    fontSize: theme.fontSize.sm,
    fontWeight: '700',
    lineHeight: 21,
  },
  quoteCard: {
    alignItems: 'flex-start',
    backgroundColor: theme.colors.accentSoft,
    borderColor: theme.colors.accentDark,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    gap: theme.spacing.md,
    padding: theme.spacing.lg,
  },
  quoteText: {
    color: theme.colors.text,
    fontSize: theme.fontSize.lg,
    fontWeight: '900',
    lineHeight: 28,
  },
});
