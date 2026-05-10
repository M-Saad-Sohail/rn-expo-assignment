import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '@/constants/theme';

type IoniconName = keyof typeof Ionicons.glyphMap;

type StatusCard = {
  icon: IoniconName;
  title: string;
  text: string;
};

const statusCards: StatusCard[] = [
  {
    icon: 'cafe',
    title: 'Developer Status',
    text: 'Code, coffee, and controlled chaos.',
  },
  {
    icon: 'sparkles',
    title: "Today's Coding Energy",
    text: 'Building cool things, one component at a time.',
  },
  {
    icon: 'bug',
    title: 'Debugging Mood',
    text: "Today's mission: fix bugs without creating new ones.",
  },
  {
    icon: 'chatbox',
    title: 'Funny Coding Quote',
    text: 'Console.log is still a valid emotional support tool.',
  },
];

const goals = ['Polish one screen', 'Rename one confusing variable', 'Take a tiny break after the next commit'];

export default function HomeScreen() {
  const params = useLocalSearchParams<{ name?: string }>();
  const displayName = params.name?.trim() || 'Aleena Fatima';

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View style={styles.heroTop}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>AF</Text>
            </View>
            <TouchableOpacity activeOpacity={0.78} onPress={() => router.replace('/')} style={styles.logoutButton}>
              <Ionicons color={theme.colors.text} name="log-out-outline" size={18} />
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.greeting}>Heyy {displayName} 👋</Text>
          <Text style={styles.heroText}>
            Your dev corner is ready. Keep it simple, keep it clean, and ship something lovely.
          </Text>
        </View>

        <View style={styles.energyCard}>
          <View style={styles.energyIcon}>
            <Ionicons color={theme.colors.ink} name="flash" size={24} />
          </View>
          <View style={styles.energyCopy}>
            <Text style={styles.energyLabel}>{"Today's Coding Energy"}</Text>
            <Text style={styles.energyTitle}>Soft focus, sharp commits</Text>
          </View>
        </View>

        <View style={styles.cardGrid}>
          {statusCards.map((card) => (
            <View key={card.title} style={styles.statusCard}>
              <View style={styles.cardIcon}>
                <Ionicons color={theme.colors.primary} name={card.icon} size={21} />
              </View>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardText}>{card.text}</Text>
            </View>
          ))}
        </View>

        <View style={styles.quoteCard}>
          <Text style={styles.quoteLabel}>Funny Coding Quote</Text>
          <Text style={styles.quoteText}>Console.log is still a valid emotional support tool.</Text>
        </View>

        <View style={styles.goalsCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Quick Goals</Text>
            <Ionicons color={theme.colors.accent} name="checkmark-done-circle" size={23} />
          </View>
          {goals.map((goal) => (
            <View key={goal} style={styles.goalRow}>
              <View style={styles.goalDot} />
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
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
  hero: {
    backgroundColor: theme.colors.cardAlt,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    padding: theme.spacing.lg,
    ...theme.shadows.card,
  },
  heroTop: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.pill,
    height: 58,
    justifyContent: 'center',
    width: 58,
  },
  avatarText: {
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
  heroText: {
    color: theme.colors.mutedText,
    fontSize: theme.fontSize.md,
    lineHeight: 24,
    marginTop: theme.spacing.sm,
  },
  energyCard: {
    alignItems: 'center',
    backgroundColor: theme.colors.accentSoft,
    borderColor: theme.colors.accentDark,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    flexDirection: 'row',
    gap: theme.spacing.md,
    padding: theme.spacing.lg,
  },
  energyIcon: {
    alignItems: 'center',
    backgroundColor: theme.colors.accent,
    borderRadius: theme.radius.lg,
    height: 52,
    justifyContent: 'center',
    width: 52,
  },
  energyCopy: {
    flex: 1,
  },
  energyLabel: {
    color: theme.colors.accent,
    fontSize: theme.fontSize.xs,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  energyTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.md,
    fontWeight: '900',
    marginTop: theme.spacing.xs,
  },
  cardGrid: {
    gap: theme.spacing.md,
  },
  statusCard: {
    backgroundColor: theme.colors.card,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    gap: theme.spacing.sm,
    padding: theme.spacing.lg,
  },
  cardIcon: {
    alignItems: 'center',
    backgroundColor: theme.colors.chip,
    borderRadius: theme.radius.md,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  cardTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.md,
    fontWeight: '900',
  },
  cardText: {
    color: theme.colors.mutedText,
    fontSize: theme.fontSize.sm,
    lineHeight: 22,
  },
  quoteCard: {
    backgroundColor: theme.colors.primarySoft,
    borderColor: theme.colors.primaryDark,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    padding: theme.spacing.lg,
  },
  quoteLabel: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.xs,
    fontWeight: '900',
    marginBottom: theme.spacing.sm,
    textTransform: 'uppercase',
  },
  quoteText: {
    color: theme.colors.text,
    fontSize: theme.fontSize.lg,
    fontWeight: '900',
    lineHeight: 28,
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
  goalRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  goalDot: {
    backgroundColor: theme.colors.gold,
    borderRadius: theme.radius.pill,
    height: 10,
    width: 10,
  },
  goalText: {
    color: theme.colors.text,
    flex: 1,
    fontSize: theme.fontSize.sm,
    fontWeight: '700',
    lineHeight: 22,
  },
});
