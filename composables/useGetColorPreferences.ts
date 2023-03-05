import { ColorPreferenceType } from "~~/types/colorPreference";

export const useGetColorPreference = (
  storageKey: string | null = null
): ColorPreferenceType => {
  if (!storageKey || !localStorage.getItem(storageKey))
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  else return localStorage.getItem(storageKey) as ColorPreferenceType;
};
