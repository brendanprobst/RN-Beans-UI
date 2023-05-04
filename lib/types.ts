//NOTE - Common Types are found in this file, specific types will be contained in the file they are used in

// todo - generate a theme type for the theme object that is used by the components and a theme type for what the user feeds into the theme provider
export type BeansThemeType = {
  Colors?: ColorThemeType;
  Fonts?: FontThemeType;
  Components?: ComponentThemeType;
};
// export type Theme = {
//   Colors: ColorThemeType;
//   Fonts: FontThemeType;
// };
// defining color theme
// colors consist of a static color map and a dark mode color map and a light mode color map
// static colors can be any string,
// dark and light mode colors must have the same keys

type KeyUnion<T> = T extends { [key: string]: any } ? keyof T : never;
type ColorMap = { [key: string]: string };

export type ColorThemeType = {
  StaticColors: ColorMap;
  DarkModeColors?: ColorMap & { [key in KeyUnion<ColorMap>]: string };
  LightModeColors?: ColorMap & { [key in KeyUnion<ColorMap>]: string };
};

type FontModifierMap = {
  default: {
    fontFamily: string;
    fontSize: number;
  };
  bold: {
    fontFamily: string;
    fontSize: number;
  };
};

export type FontThemeType = {
  [key: string]:
    | {
        fontFamily: string;
        fontSize: number;
      }
    | FontModifierMap;
};

export type Font = {
  fontFamily: string;
  fontWeight?: FontWeight;
  fontSize: FontSize;
};
export type FontSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl"
  | number;
export type FontWeight = "light" | "regular" | "medium" | "bold" | number;
export type ComponentThemeType = {};

export type PaddingType =
  | {
      paddingVertical?: number;
      paddingHorizontal?: number;
      paddingLeft?: number;
      paddingRight?: number;
      paddingTop?: number;
      paddingBottom?: number;
      padding?: number;
    }
  | undefined;
export type MarginType =
  | {
      marginVertical?: number;
      marginHorizontal?: number;
      marginLeft?: number;
      marginRight?: number;
      marginTop?: number;
      marginBottom?: number;
      margin?: number;
    }
  | undefined;
