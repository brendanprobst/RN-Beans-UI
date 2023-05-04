import { BeansThemeType } from "lib/types";
import React, { createContext, useContext } from "react";
import { defaultColors, defaultFonts, defaultTheme } from "./theme";
import { useColorScheme } from "react-native";
export type ExtendThemeProps = {
  customTheme?: BeansThemeType;
  colorScheme?: "dark" | "light";
};
export function extendTheme({
  customTheme,
  colorScheme,
}: ExtendThemeProps): BeansThemeType {
  console.log("in extend Theme");
  if (customTheme === null || customTheme === undefined) {
    return defaultTheme;
  } else {
    const mergeStaticColors = {
      ...defaultColors.StaticColors,
      ...customTheme.Colors?.StaticColors,
    };
    console.log("mergeStaticColors", mergeStaticColors);
    const mergedDarkColors = {
      ...defaultColors.DarkModeColors,
      ...customTheme.Colors?.DarkModeColors,
    };
    const mergedLightColors = {
      ...defaultColors.LightModeColors,
      ...customTheme.Colors?.LightModeColors,
    };

    const newTheme: BeansThemeType = {
      Colors: {
        ...(mergeStaticColors as any),
        ...(colorScheme === "dark" ? mergedDarkColors : mergedLightColors),
      },
      Fonts: {
        ...defaultFonts,
        ...customTheme.Fonts,
      },
    };

    return newTheme;
  }
}
// 2. Create a ThemeContext
export const ThemeContext = createContext<BeansThemeType>(defaultTheme);

// 3. Create a UIProvider component
interface UIProviderProps {
  children: JSX.Element;
  customTheme: BeansThemeType;
  colorScheme: "dark" | "light";
}
export default function BeansProvider({
  customTheme,
  children,
  colorScheme,
}: UIProviderProps) {
  const _theme = extendTheme({ customTheme, colorScheme });
  return (
    <ThemeContext.Provider value={_theme}>{children}</ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
export const useColors = () => useContext(ThemeContext).Colors;
export const useFonts = () => useContext(ThemeContext).Fonts;
