import { useState } from "react";
import {
  Pressable,
  TextInput,
  View,
  type TextInputProps,
} from "react-native";

import { AppText } from "@/components/ui/Text";
import { colors, radii, resolveFontFamily, spacing } from "@/theme";
import { cn } from "@/utils/cn";

export type TextFieldProps = Omit<TextInputProps, "style"> & {
  label: string;
  error?: string;
  className?: string;
};

/**
 * Branded text input with label + validation message.
 */
export function TextField({
  label,
  error,
  className,
  secureTextEntry,
  onFocus,
  onBlur,
  ...rest
}: TextFieldProps) {
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(Boolean(secureTextEntry));
  const showToggle = Boolean(secureTextEntry);

  return (
    <View className={cn("w-full", className)}>
      <AppText variant="caption" color="soil" style={{ marginBottom: spacing.sm }}>
        {label}
      </AppText>

      <View
        style={{
          borderWidth: 1.5,
          borderColor: error
            ? colors.signal
            : focused
              ? colors.ink
              : colors.soil,
          borderRadius: radii.md,
          backgroundColor: colors.cream,
          minHeight: 52,
          paddingHorizontal: spacing.lg,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholderTextColor={colors.soil}
          secureTextEntry={hidden}
          autoCapitalize="none"
          autoCorrect={false}
          onFocus={(event) => {
            setFocused(true);
            onFocus?.(event);
          }}
          onBlur={(event) => {
            setFocused(false);
            onBlur?.(event);
          }}
          style={{
            flex: 1,
            fontFamily: resolveFontFamily("AndaleMono"),
            fontSize: 16,
            lineHeight: 22,
            color: colors.ink,
            paddingVertical: spacing.md,
          }}
          {...rest}
        />

        {showToggle ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={hidden ? "Show password" : "Hide password"}
            hitSlop={8}
            onPress={() => setHidden((value) => !value)}
          >
            <AppText variant="caption" color="soil">
              {hidden ? "Show" : "Hide"}
            </AppText>
          </Pressable>
        ) : null}
      </View>

      {error ? (
        <AppText
          variant="caption"
          color="danger"
          style={{ marginTop: spacing.xs }}
        >
          {error}
        </AppText>
      ) : null}
    </View>
  );
}
