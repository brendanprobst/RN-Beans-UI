import { BeansThemeType } from "lib/types";
import React, { createContext, useContext } from "react";
import { defaultColors, defaultFonts, defaultTheme } from "./theme";
import { useColorScheme } from "react-native";

export function extendTheme(customTheme: BeansThemeType): BeansThemeType {
  const colorScheme = useColorScheme();
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
    console.log("mergedDarkColors", mergedDarkColors);
    const mergedLightColors = {
      ...defaultColors.LightModeColors,
      ...customTheme.Colors?.LightModeColors,
    };
    console.log("mergedLightColors", mergedLightColors);

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
}
export default function BeansProvider({
  customTheme,
  children,
}: UIProviderProps) {
  const _theme = extendTheme(customTheme);
  return (
    <ThemeContext.Provider value={_theme}>{children}</ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
export const useColors = () => useContext(ThemeContext).Colors;
export const useFonts = () => useContext(ThemeContext).Fonts;
