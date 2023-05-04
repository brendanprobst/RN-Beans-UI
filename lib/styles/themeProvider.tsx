import { BeansThemeType } from "lib/types";
import React, { createContext, useContext } from "react";
import { defaultColors, defaultFonts, defaultTheme } from "./theme";
import { useColorScheme } from "react-native";
export type ExtendThemeProps = {
  Colors?: any;
  Fonts?: any;
};
export function extendTheme(customTheme: BeansThemeType): BeansThemeType {
  const colorScheme = useColorScheme();

  console.log("in extend Theme");
  if (customTheme === null || customTheme === undefined) {
    return defaultTheme;
  } else {
    const newTheme: BeansThemeType = {
      Colors: {
        // custom static colors
        ...(customTheme.Colors?.StaticColors as any),
        // default static colors
        ...(defaultColors.StaticColors as any),
        // dynamic default colors
        ...(colorScheme === "dark"
          ? defaultColors.DarkModeColors
          : defaultColors.LightModeColors),
        // dynamic custom colors
        ...(colorScheme === "dark"
          ? customTheme.Colors?.DarkModeColors
          : customTheme.Colors?.LightModeColors),
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
  console.log(_theme.Colors);
  return (
    <ThemeContext.Provider value={_theme}>{children}</ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
export const useColors = () => useContext(ThemeContext).Colors;
export const useFonts = () => useContext(ThemeContext).Fonts;
