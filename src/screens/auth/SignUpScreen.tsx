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
  validateSignUpForm,
  type FieldErrors,
  type SignUpValues,
} from "@/utils/validation";

/**
 * Get Started / Sign up form — validates input only.
 * Supabase auth will be wired in a later step.
 */
export function SignUpScreen() {
  const [values, setValues] = useState<SignUpValues>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FieldErrors<keyof SignUpValues>>({});
  const [submittedOk, setSubmittedOk] = useState(false);

  function updateField<K extends keyof SignUpValues>(
    key: K,
    value: SignUpValues[K],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    setSubmittedOk(false);

    if (errors[key]) {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  }

  function handleSubmit() {
    const nextErrors = validateSignUpForm(values);
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
              Get started
            </AppText>
            <AppText
              variant="body"
              color="soil"
              style={{ marginTop: spacing.sm }}
            >
              Create an account to start collecting places.
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
              textContentType="newPassword"
              autoComplete="new-password"
              placeholder="At least 8 characters"
              returnKeyType="next"
            />

            <TextField
              label="Confirm password"
              value={values.confirmPassword}
              onChangeText={(text) => updateField("confirmPassword", text)}
              error={errors.confirmPassword}
              secureTextEntry
              textContentType="newPassword"
              autoComplete="new-password"
              placeholder="Re-enter your password"
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
            <Button label="Create Account" onPress={handleSubmit} />
          </View>

          <TextLink
            className="mt-5"
            prefix="Already have an account? "
            label="Sign in"
            onPress={() => router.replace(routes.auth.login)}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
