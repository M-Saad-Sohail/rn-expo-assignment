import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import { theme } from "@/constants/theme";

type PurposeMintLogoProps = {
  size?: number;
  showName?: boolean;
  inverted?: boolean;
};

export function PurposeMintLogo({
  size = 52,
  showName = true,
  inverted = false,
}: PurposeMintLogoProps) {
  return (
    <View
      accessibilityLabel="PurposeMint"
      accessibilityRole="image"
      style={styles.lockup}
    >
      <Image
        contentFit="contain"
        source={require("../assets/images/purpose-mint-logo.png")}
        style={[styles.image, { height: size, width: size }]}
      />
      {showName ? (
        <Text style={[styles.name, inverted && styles.nameInverted]}>
          PurposeMint
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  lockup: {
    alignItems: "center",
    flexDirection: "row",
    gap: theme.spacing.sm,
  },
  image: {
    borderRadius: theme.radius.sm,
  },
  name: {
    color: theme.colors.darkGreenText,
    fontSize: 23,
    fontWeight: "900",
    letterSpacing: -0.6,
  },
  nameInverted: {
    color: theme.colors.white,
  },
});
