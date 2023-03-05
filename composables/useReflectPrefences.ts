export const useReflectPreferences = () => {
  const theme = useGetColorPreference("theme-preferences");

  document.firstElementChild?.setAttribute("data-theme", theme);
};
