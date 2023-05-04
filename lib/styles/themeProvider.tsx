import { BeansThemeType } from "lib/types";
import React, { createContext, useContext, useEffect, useState } from "react";
import { defaultColors, defaultFonts, defaultTheme } from "./theme";
import { ColorSchemeName, useColorScheme } from "react-native";

export function extendTheme(
  customTheme: BeansThemeType,
  colorScheme: ColorSchemeName,
): BeansThemeType {
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
  const [theme, setTheme] = useState<BeansThemeType>(defaultTheme);
  const colorScheme = useColorScheme();
  useEffect(() => {
    const newTheme = extendTheme(customTheme, colorScheme);
    setTheme(newTheme);
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
export const useColors = () => useContext(ThemeContext).Colors;
export const useFonts = () => useContext(ThemeContext).Fonts;
