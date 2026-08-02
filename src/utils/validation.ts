/**
 * Client-side auth form validation.
 * No network calls — ready to swap in Supabase later.
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type FieldErrors<T extends string> = Partial<Record<T, string>>;

export function validateEmail(value: string): string | undefined {
  const email = value.trim();

  if (!email) {
    return "Email is required.";
  }

  if (!EMAIL_PATTERN.test(email)) {
    return "Enter a valid email address.";
  }

  return undefined;
}

export function validatePassword(value: string): string | undefined {
  if (!value) {
    return "Password is required.";
  }

  if (value.length < 8) {
    return "Password must be at least 8 characters.";
  }

  return undefined;
}

export function validatePasswordConfirmation(
  password: string,
  confirmation: string,
): string | undefined {
  if (!confirmation) {
    return "Confirm your password.";
  }

  if (password !== confirmation) {
    return "Passwords do not match.";
  }

  return undefined;
}

export type LoginValues = {
  email: string;
  password: string;
};

export type SignUpValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

export function validateLoginForm(
  values: LoginValues,
): FieldErrors<keyof LoginValues> {
  const errors: FieldErrors<keyof LoginValues> = {};
  const emailError = validateEmail(values.email);
  const passwordError = validatePassword(values.password);

  if (emailError) errors.email = emailError;
  if (passwordError) errors.password = passwordError;

  return errors;
}

export function validateSignUpForm(
  values: SignUpValues,
): FieldErrors<keyof SignUpValues> {
  const errors: FieldErrors<keyof SignUpValues> = {};
  const emailError = validateEmail(values.email);
  const passwordError = validatePassword(values.password);
  const confirmError = validatePasswordConfirmation(
    values.password,
    values.confirmPassword,
  );

  if (emailError) errors.email = emailError;
  if (passwordError) errors.password = passwordError;
  if (confirmError) errors.confirmPassword = confirmError;

  return errors;
}

export function hasFieldErrors<T extends string>(
  errors: FieldErrors<T>,
): boolean {
  return Object.keys(errors).length > 0;
}
