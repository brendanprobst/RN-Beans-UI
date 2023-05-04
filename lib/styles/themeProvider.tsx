import { Theme } from "lib/types";
import React, { createContext, useContext } from "react";
import { defaultColors, defaultFontStyles, defaultTheme } from "./theme";
import { useColorScheme } from "react-native";
export type ExtendThemeProps = {
  Colors?: any;
  Fonts?: any;
};
export function extendTheme(
  customTheme: Theme | { Colors: any; Fonts: any },
): Theme {
  const colorScheme = useColorScheme();

  console.log("in extend Theme");
  if (customTheme === null || customTheme === undefined) {
    return defaultTheme;
  } else {
    const newTheme: Theme = {
      Colors: {
        // default and custom static colors
        ...defaultColors.StaticColors,
        ...customTheme.Colors.StaticColors,
        // dynamic default colors
        ...(colorScheme === "dark"
          ? defaultColors.DarkModeColors
          : defaultColors.LightModeColors),
        //dynamic custom colors
        ...(colorScheme === "dark"
          ? customTheme.Colors.DarkModeColors
          : customTheme.Colors.LightModeColors),
      },
      Fonts: {
        ...defaultFontStyles,
        ...customTheme.Fonts,
      },
    };
    return newTheme;
  }
}
// 2. Create a ThemeContext
export const ThemeContext = createContext<Theme>(defaultTheme);

// 3. Create a UIProvider component
interface UIProviderProps {
  children: JSX.Element;
  theme: Theme;
}
export default function BeansProvider({ theme, children }: UIProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
export const useColors = () => useContext(ThemeContext).Colors;
export const useFonts = () => useContext(ThemeContext).Fonts;
