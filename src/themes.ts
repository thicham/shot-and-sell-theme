export const lightTheme = {
  background: "#FFFFFF",
  surface: "#F8FAFC",
  surfaceElevated: "#FFFFFF",
  text: {
    primary: "#111827",
    secondary: "#6B7280",
    inverse: "#FFFFFF",
  },
  border: "#E5E7EB",
  overlay: "rgba(0, 0, 0, 0.45)",
} as const;

export const darkTheme = {
  background: "#080C10",
  surface: "#121820",
  surfaceElevated: "#1A212B",
  text: {
    primary: "#F9FAFB",
    secondary: "#9CA3AF",
    inverse: "#111827",
  },
  border: "#2A3038",
  overlay: "rgba(0, 0, 0, 0.60)",
} as const;

export type ThemeMode = "light" | "dark" | "system";
