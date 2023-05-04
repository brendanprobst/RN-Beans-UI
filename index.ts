import * as Components from "./lib/components/index";
import BeansProvider, {
  ThemeContext,
  extendTheme,
  useTheme,
  useColors,
  useFonts,
} from "./lib/styles/themeProvider";
import {
  BeansThemeType,
  ColorThemeType,
  FontThemeType,
  Font,
} from "./lib/types";
import Text from "./lib/components/text";

export type { BeansThemeType, ColorThemeType, FontThemeType, Font };

export {
  Text,
  ThemeContext,
  BeansProvider,
  extendTheme,
  useTheme,
  useColors,
  useFonts,
};
