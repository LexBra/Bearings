import { router } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppText, Button, TextLink } from "@/components/ui";
import { routes } from "@/navigation";
import { colors, spacing } from "@/theme";

/**
 * Welcome / Get Started — matches Figma brand screen.
 * Colors, type, and components come from the design system.
 */
export function WelcomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.cream }}>
      <View className="flex-1 px-8">
        <View className="flex-1 items-center justify-center">
          <Image
            accessibilityLabel="Bearings bear illustration"
            source={require("../../../assets/images/bear.png")}
            resizeMode="contain"
            style={{
              width: 220,
              height: 220,
              marginBottom: spacing["4xl"],
            }}
          />

          <AppText variant="title" color="primary" center>
            Bearings
          </AppText>

          <AppText
            variant="body"
            color="soil"
            center
            style={{ marginTop: spacing.md }}
          >
            Collect places. Create memories.
          </AppText>
        </View>

        <View style={{ paddingBottom: spacing.xl }}>
          <Button
            label="Get Started"
            onPress={() => router.push(routes.auth.signUp)}
          />

          <TextLink
            className="mt-5"
            prefix="Already have an account? "
            label="Sign in"
            onPress={() => router.push(routes.auth.login)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
