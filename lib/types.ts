//NOTE - Common Types are found in this file, specific types will be contained in the file they are used in

// todo - generate a theme type for the theme object that is used by the components and a theme type for what the user feeds into the theme provider
export type Theme = {
  Colors: ColorTheme;
  Fonts: FontTheme;
};

export type ColorTheme = {
  StaticColors: {
    [key: string]: string; //allows for custom colors to be added
  };
  DarkModeColors?: {
    [key: string]: string;
  };
  LightModeColors?: {
    [key: string]: string;
  };
};
export type FontTheme = {
  body: Font;
  title: Font;
  subTitle: Font;
  button: Font;
  [key: string]: Font; //allows for custom fonts to be added
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
