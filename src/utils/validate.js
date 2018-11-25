// @flow

export const required = (value: string | number): ?string =>
  value || typeof value === "number" ? undefined : "Required";

export const minLength = (min: number) => (value: string): ?string =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength6 = minLength(6);

export const email = (value: string): ?string =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
