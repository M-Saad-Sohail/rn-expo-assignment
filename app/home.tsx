import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '@/constants/theme';

type IoniconName = keyof typeof Ionicons.glyphMap;

type FunCard = {
  icon: IoniconName;
  title: string;
  text: string;
};

const funCards: FunCard[] = [
  {
    icon: 'bug',
    title: 'Developer Humor',
    text: 'Debugging: Being the detective in a crime movie where you are also the murderer.',
  },
  {
    icon: 'terminal',
    title: 'Daily Loop',
    text: 'Eat. Sleep. Code. Repeat.',
  },
  {
    icon: 'bulb',
    title: 'Clean Thinking',
    text: 'First, solve the problem. Then, write the code.',
  },
  {
    icon: 'git-branch',
    title: 'Bug Report Energy',
    text: 'A good developer can fix a bug. A great developer can explain why it was not a bug.',
  },
  {
    icon: 'hardware-chip',
    title: 'Binary Club',
    text: "There are only 10 types of people: those who understand binary and those who don't.",
  },
];

const checklist = [
  'Write one tiny reusable component',
  'Name variables like future-you is watching',
  'Commit before the code gets too brave',
];

const stats = [
  { label: 'Bugs dodged', value: '17' },
  { label: 'Coffee level', value: '82%' },
  { label: 'Tabs open', value: '24' },
  { label: 'Flow state', value: 'ON' },
];

export default function HomeScreen() {
  const params = useLocalSearchParams<{ name?: string }>();
  const displayName = params.name?.trim() || 'Saad Sohail';

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.headerBadge}>
              <Ionicons color={theme.colors.primary} name="code-working" size={24} />
            </View>
            <TouchableOpacity
              activeOpacity={0.78}
              onPress={() => router.replace('/')}
              style={styles.logoutButton}>
              <Ionicons color={theme.colors.white} name="log-out-outline" size={18} />
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.greeting}>Heyy {displayName} 👋</Text>
          <Text style={styles.headerSubtitle}>
            Your tiny engineer dashboard is ready. Build, debug, smile, repeat.
          </Text>

          <View style={styles.moodPill}>
            <Ionicons color={theme.colors.warning} name="sunny" size={18} />
            <Text style={styles.moodText}>{"Today's Developer Mood: calmly shipping"}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Coding Quote</Text>
          <View style={styles.quoteCard}>
            <Ionicons color={theme.colors.primary} name="sparkles" size={24} />
            <Text style={styles.quoteText}>First, solve the problem. Then, write the code.</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Coder Life Cards</Text>
          <View style={styles.cardGrid}>
            {funCards.map((card) => (
              <View key={card.title} style={styles.funCard}>
                <View style={styles.cardIcon}>
                  <Ionicons color={theme.colors.primary} name={card.icon} size={22} />
                </View>
                <Text style={styles.funCardTitle}>{card.title}</Text>
                <Text style={styles.funCardText}>{card.text}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mini Checklist</Text>
          <View style={styles.checklistBox}>
            {checklist.map((item) => (
              <View key={item} style={styles.checkItem}>
                <Ionicons color={theme.colors.success} name="checkmark-circle" size={22} />
                <Text style={styles.checkText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fun Stats</Text>
          <View style={styles.statsGrid}>
            {stats.map((item) => (
              <View key={item.label} style={styles.statCard}>
                <Text style={styles.statValue}>{item.value}</Text>
                <Text style={styles.statLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
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
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.xl,
    overflow: 'hidden',
    padding: theme.spacing.lg,
    ...theme.shadows.card,
  },
  headerTop: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl,
  },
  headerBadge: {
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.lg,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  logoutButton: {
    alignItems: 'center',
    backgroundColor: theme.colors.primaryDark,
    borderColor: theme.colors.primarySoft,
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    flexDirection: 'row',
    gap: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  logoutText: {
    color: theme.colors.white,
    fontSize: theme.fontSize.sm,
    fontWeight: '800',
  },
  greeting: {
    color: theme.colors.white,
    fontSize: theme.fontSize.xl,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 36,
  },
  headerSubtitle: {
    color: theme.colors.blueMist,
    fontSize: theme.fontSize.md,
    lineHeight: 23,
    marginTop: theme.spacing.sm,
  },
  moodPill: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.pill,
    flexDirection: 'row',
    gap: theme.spacing.xs,
    marginTop: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  moodText: {
    color: theme.colors.text,
    flexShrink: 1,
    fontSize: theme.fontSize.sm,
    fontWeight: '800',
  },
  section: {
    gap: theme.spacing.md,
  },
  sectionTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.lg,
    fontWeight: '900',
    letterSpacing: 0,
  },
  quoteCard: {
    alignItems: 'flex-start',
    backgroundColor: theme.colors.card,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    gap: theme.spacing.md,
    padding: theme.spacing.lg,
    ...theme.shadows.card,
  },
  quoteText: {
    color: theme.colors.code,
    fontSize: theme.fontSize.lg,
    fontWeight: '900',
    lineHeight: 28,
  },
  cardGrid: {
    gap: theme.spacing.md,
  },
  funCard: {
    backgroundColor: theme.colors.card,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    gap: theme.spacing.sm,
    padding: theme.spacing.lg,
    ...theme.shadows.card,
  },
  cardIcon: {
    alignItems: 'center',
    backgroundColor: theme.colors.iconBackground,
    borderRadius: theme.radius.md,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  funCardTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.md,
    fontWeight: '900',
  },
  funCardText: {
    color: theme.colors.mutedText,
    fontSize: theme.fontSize.sm,
    lineHeight: 21,
  },
  checklistBox: {
    backgroundColor: theme.colors.card,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    gap: theme.spacing.md,
    padding: theme.spacing.lg,
    ...theme.shadows.card,
  },
  checkItem: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  checkText: {
    color: theme.colors.text,
    flex: 1,
    fontSize: theme.fontSize.sm,
    fontWeight: '700',
    lineHeight: 21,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  statCard: {
    backgroundColor: theme.colors.card,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    flexGrow: 1,
    minWidth: '45%',
    padding: theme.spacing.lg,
    ...theme.shadows.card,
  },
  statValue: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.xl,
    fontWeight: '900',
    letterSpacing: 0,
  },
  statLabel: {
    color: theme.colors.mutedText,
    fontSize: theme.fontSize.sm,
    fontWeight: '700',
    marginTop: theme.spacing.xs,
  },
});
