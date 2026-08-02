import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppText, Button, TextField, TextLink } from "@/components/ui";
import { routes } from "@/navigation";
import { colors, spacing } from "@/theme";
import {
  hasFieldErrors,
  validateLoginForm,
  type FieldErrors,
  type LoginValues,
} from "@/utils/validation";

/**
 * Sign in form — validates input only.
 * Supabase auth will be wired in a later step.
 */
export function LoginScreen() {
  const [values, setValues] = useState<LoginValues>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FieldErrors<keyof LoginValues>>({});
  const [submittedOk, setSubmittedOk] = useState(false);

  function updateField<K extends keyof LoginValues>(
    key: K,
    value: LoginValues[K],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    setSubmittedOk(false);

    if (errors[key]) {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  }

  function handleSubmit() {
    const nextErrors = validateLoginForm(values);
    setErrors(nextErrors);

    if (hasFieldErrors(nextErrors)) {
      setSubmittedOk(false);
      return;
    }

    // Auth intentionally not connected yet.
    setSubmittedOk(true);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.cream }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: spacing["2xl"],
            paddingBottom: spacing["2xl"],
          }}
        >
          <TextLink
            className="mt-2 self-start"
            label="Back"
            onPress={() => router.back()}
          />

          <View style={{ marginTop: spacing["3xl"], marginBottom: spacing.xl }}>
            <AppText variant="title" color="primary">
              Sign in
            </AppText>
            <AppText
              variant="body"
              color="soil"
              style={{ marginTop: spacing.sm }}
            >
              Welcome back. Enter your email and password.
            </AppText>
          </View>

          <View style={{ gap: spacing.lg }}>
            <TextField
              label="Email"
              value={values.email}
              onChangeText={(text) => updateField("email", text)}
              error={errors.email}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoComplete="email"
              placeholder="you@example.com"
              returnKeyType="next"
            />

            <TextField
              label="Password"
              value={values.password}
              onChangeText={(text) => updateField("password", text)}
              error={errors.password}
              secureTextEntry
              textContentType="password"
              autoComplete="password"
              placeholder="At least 8 characters"
              returnKeyType="done"
              onSubmitEditing={handleSubmit}
            />
          </View>

          {submittedOk ? (
            <AppText
              variant="caption"
              color="soil"
              style={{ marginTop: spacing.lg }}
            >
              Looks good. Authentication will be connected next.
            </AppText>
          ) : null}

          <View style={{ marginTop: spacing["2xl"] }}>
            <Button label="Sign In" onPress={handleSubmit} />
          </View>

          <TextLink
            className="mt-5"
            prefix="New here? "
            label="Get started"
            onPress={() => router.replace(routes.auth.signUp)}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
