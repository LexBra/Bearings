declare const tokens: {
  colors: {
    brand: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      DEFAULT: string;
      foreground: string;
    };
    accent: {
      DEFAULT: string;
      soft: string;
      foreground: string;
    };
    surface: {
      DEFAULT: string;
      muted: string;
      sunken: string;
      inverse: string;
    };
    text: {
      primary: string;
      secondary: string;
      muted: string;
      inverse: string;
      brand: string;
    };
    border: {
      DEFAULT: string;
      strong: string;
      focus: string;
    };
    semantic: {
      success: string;
      successSoft: string;
      warning: string;
      warningSoft: string;
      danger: string;
      dangerSoft: string;
      info: string;
      infoSoft: string;
    };
  };
  spacing: {
    none: number;
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    "2xl": number;
    "3xl": number;
    "4xl": number;
    "5xl": number;
  };
  radii: {
    none: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: number;
  };
  shadows: {
    none: {
      shadowColor: string;
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
    sm: {
      shadowColor: string;
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
    md: {
      shadowColor: string;
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
    lg: {
      shadowColor: string;
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
  };
  fonts: {
    display: {
      regular: string;
      medium: string;
      semibold: string;
      bold: string;
    };
    sans: {
      regular: string;
      medium: string;
      semibold: string;
      bold: string;
    };
  };
  textVariants: Record<
    | "display"
    | "title"
    | "headline"
    | "body"
    | "bodyEmphasis"
    | "label"
    | "caption"
    | "overline",
    {
      fontFamily: string;
      fontSize: number;
      lineHeight: number;
      letterSpacing: number;
      textTransform?: "uppercase";
    }
  >;
  buttonSizes: Record<
    "sm" | "md" | "lg",
    {
      minHeight: number;
      paddingHorizontal: number;
      radius: number;
      fontSize: number;
      lineHeight: number;
    }
  >;
};

export default tokens;
