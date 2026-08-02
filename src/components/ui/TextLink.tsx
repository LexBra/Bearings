import { Pressable, type PressableProps } from "react-native";

import { AppText, type AppTextColor } from "@/components/ui/Text";
import { cn } from "@/utils/cn";

export type TextLinkProps = Omit<PressableProps, "children"> & {
  label: string;
  prefix?: string;
  color?: AppTextColor;
  className?: string;
};

/**
 * Inline text link (e.g. "Sign in" underlined after a prefix).
 */
export function TextLink({
  label,
  prefix,
  color = "soil",
  className,
  ...rest
}: TextLinkProps) {
  return (
    <Pressable
      accessibilityRole="link"
      className={cn("flex-row flex-wrap items-center justify-center", className)}
      {...rest}
    >
      {({ pressed }) => (
        <>
          {prefix ? (
            <AppText variant="caption" color={color}>
              {prefix}
            </AppText>
          ) : null}
          <AppText
            variant="caption"
            color={color}
            style={{
              textDecorationLine: "underline",
              opacity: pressed ? 0.7 : 1,
            }}
          >
            {label}
          </AppText>
        </>
      )}
    </Pressable>
  );
}
