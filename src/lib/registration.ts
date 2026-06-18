const STORAGE_KEY = "sg-registration-draft";

export type RegistrationDraft = {
  packageId: string;
  packageName: string;
  packagePrice: string;
  fullName: string;
  email: string;
  phone: string;
  about: string;
};

export function saveRegistrationDraft(data: RegistrationDraft) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadRegistrationDraft(): RegistrationDraft | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as RegistrationDraft;
  } catch {
    return null;
  }
}

export function clearRegistrationDraft() {
  sessionStorage.removeItem(STORAGE_KEY);
}
