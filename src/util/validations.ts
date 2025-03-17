export function isEmail(value: FormDataEntryValue | null) {
  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (typeof value !== 'string') {
    return false;
  }
  const email = value.trim();
  return emailRegex.test(email);
}

export function isNotEmpty(value: FormDataEntryValue | null) {
  if (typeof value !== 'string') {
    return false;
  }
  return value.trim() !== '';
}

export function hasMinLength(value: string, minLength: number) {
  return value.length >= minLength;
}
