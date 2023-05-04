import { ColorThemeType, FontThemeType, BeansThemeType } from "lib/types";
import { Dimensions, StyleSheet } from "react-native";
// this file defines all the default values for the theme
export const defaultColors: ColorThemeType = {
  StaticColors: {
    black: "#000000",
    white: "#FFFFFF",
    gray: "#808080",
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  },
  DarkModeColors: {
    background: "#1A1A1A",
    text: "#FFFFFF",
    accent: "#4A90E2",
    primary: "#FFA500",
    secondary: "#FFC0CB",
    blah: "#0000FF",
  },
  LightModeColors: {
    background: "#FFFFFF",
    text: "#000000",
    accent: "#0066CC",
    primary: "#FFA500",
    secondary: "#FFC0CB",
    blah: "#FF0000",
  },
};
export const defaultFonts: FontThemeType = {
  title: { fontFamily: "Verdana", fontSize: 28 },
  subtitle: { fontFamily: "Verdana", fontSize: 22 },
  body: {
    fontFamily: "Helvetica",
    fontSize: 14,
    bold: { fontFamily: "Helvetica-Bold", fontSize: 14 },
  },
  button: { fontFamily: "Helvetica-SemiBold", fontSize: 16 },
};
export const defaultTheme: BeansThemeType = {
  Colors: { ...defaultColors },
  Fonts: { ...defaultFonts },
};

export const Dim = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  sm: 5,
  md: 10,
  lg: 15,
  xl: 20,
  xxl: 40,
};
let extraLargeSize = 35;
let titleSize = 24;
let subTitleSize = 20;
let bodySize = 14;
let bodyLarge = 18;
let smallSize = 12;
let buttonLargeSize = 16;
export const fontSizes = {
  extraLargeSize,
  titleSize,
  subTitleSize,
  bodySize,
  bodyLarge,
  smallSize,
  buttonLargeSize,
};
export const Font = {
  extraLarge: {
    size: extraLargeSize,
    family: "OpenSans_700Bold",
  },
  title: {
    size: titleSize,
    family: "OpenSans_500Medium",
  },
  titleBold: {
    size: titleSize,
    family: "OpenSans_600SemiBold",
  },
  subTitle: {
    size: subTitleSize,
    family: "OpenSans_400Regular",
  },
  subTitleBold: {
    size: subTitleSize,
    family: "OpenSans_600SemiBold",
  },
  body: {
    size: bodySize,
    family: "Roboto_400Regular",
  },
  bodyLarge: {
    size: bodyLarge,
    family: "Roboto_400Regular",
  },
  bodyBold: {
    size: bodySize,
    family: "Roboto_700Bold",
  },
  buttonTextSmall: {
    size: smallSize,
    family: "OpenSans_500Medium",
  },
  buttonText: {
    size: bodySize,
    family: "OpenSans_600SemiBold",
  },
  buttonTextLarge: {
    size: buttonLargeSize,
    family: "OpenSans_600SemiBold",
  },
  small: {
    size: smallSize,
    family: "Roboto_400Regular",
  },
  smallBold: {
    size: smallSize,
    family: "OpenSans_600SemiBold",
  },
  title_Italic: {
    size: titleSize,
    family: "OpenSans_500Medium_Italic",
  },
  titleBold_Italic: {
    size: titleSize,
    family: "OpenSans_800ExtraBold_Italic",
  },
  subTitle_Italic: {
    size: subTitleSize,
    family: "OpenSans_400Regular_Italic",
  },
  subTitleBold_Italic: {
    size: subTitleSize,
    family: "OpenSans_600SemiBold_Italic",
  },
  body_Italic: {
    size: bodySize,
    family: "Roboto_400Regular_Italic",
  },
  bodyLarge_Italic: {
    size: bodyLarge,
    family: "Roboto_400Regular_Italic",
  },
  bodyBold_Italic: {
    size: bodySize,
    family: "Roboto_700Bold_Italic",
  },
  small_Italic: {
    size: smallSize,
    family: "Roboto_400Regular_Italic",
  },
  smallBold_Italic: {
    size: smallSize,
    family: "OpenSans_800ExtraBold_Italic",
  },
  serifTitle: {
    size: 30,
    family: "SourceSerifPro_900Black",
  },
  serifHeader1: {
    size: 30,
    family: "SourceSerifPro_900Black",
  },
  serifHeader2: { size: 28, family: "SourceSerifPro_900Black" },
  serifHeader3: { size: 24, family: "SourceSerifPro_700Bold" },
  serifHeader4: { size: 20, family: "SourceSerifPro_700Bold" },
  serifHeader5: { size: 18, family: "SourceSerifPro_700Bold" },
  serifHeader6: { size: 16, family: "SourceSerifPro_600SemiBold" },
  header1: {
    size: 30,
    family: "OpenSans_900Black",
  },
  header2: { size: 28, family: "OpenSans_900Black" },
  header3: { size: 24, family: "OpenSans_700Bold" },
  header4: { size: 20, family: "OpenSans_700Bold" },
  header5: { size: 18, family: "OpenSans_700Bold" },
  header6: { size: 16, family: "OpenSans_600SemiBold" },
  serifBody: {
    size: bodySize,
    family: "OpenSans_400Regular",
  },
};
export const UtilityStyles = StyleSheet.create({
  borderTop: {
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  absoluteTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  absoluteTopLeft: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});
export const CardStyles = StyleSheet.create({
  sectionCard: {
    padding: 10,
    marginVertical: 2.5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.5,
    elevation: 2,
  },

  container: {
    padding: 10,
    width: "100%",
  },
  card: {
    borderRadius: 5,
    padding: 10,
    marginVertical: 2,
    alignSelf: "center",
  },

  cardContent: {
    width: "100%",
    paddingVertical: 10,
    alignItems: "flex-start",
    textAlign: "left",
  },
  cardAvatarSmall: {
    height: 20,
    width: 20,
    borderRadius: 20,
  },
  cardAvatar: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  cardAvatarLarge: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  cardAvatarExtraLarge: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },

  option: {
    borderWidth: 2,
    borderStyle: "solid",
    marginVertical: 2,
    borderRadius: 5,
  },
  listCardBorder: {
    marginVertical: 1.5,
    paddingVertical: 6,
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1,
  },
  listCard: {
    marginVertical: 1.5,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // alignSelf: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.5,
    elevation: 2,
  },
  subscriptionCard: {
    paddingHorizontal: 5,
  },

  subscriptionPrice: {
    paddingVertical: 5,
  },
});
export const ModalStyles = StyleSheet.create({
  modalWrapperBottom: {
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    position: "relative",
    bottom: 0,
  },
  fullScreenModal: {
    height: "100%",
    width: "100%",
  },
  behindModal: {
    width: Dim.width,
    height: Dim.height,
    opacity: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.5,
  },
  modalBottom: {
    position: "absolute",
    width: Dim.width,
    height: Dim.height * 0.6,
    bottom: 0,
    opacity: 1,
    marginHorizontal: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
  },
  modalFull: { height: Dim.height * 0.8 },
  modalCenter: {},

  optionButton: {
    borderRadius: 5,
    height: 75,
    paddingHorizontal: 25,
    margin: Dim.width * 0.01,
    width: "48%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginRight: "auto",
  },
});
export const GlobalStyles = StyleSheet.create({
  //Containers
  border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: "100%",
    alignSelf: "center",
  },
  stdCard: {
    borderRadius: 5,
    padding: 5,
  },
  screenContainer: {
    flex: 1,
    padding: 5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    position: "relative",
  },
  scrollContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 5,
  },
  focusContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 5,
    paddingTop: 10,
  },
  scrollContainerCenter: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 5,
    alignItems: "center",
  },

  listLoadingCard: {
    marginVertical: 2,
    paddingVertical: 15,
    width: "100%",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 1,
  },
  largeLoadingCard: {
    margin: 5,
    padding: 15,
    width: "100%",
    height: "100%",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 1,
  },

  selectedIcon: {
    position: "absolute",
    left: 0,
    marginRight: 5,
  },
  //PICTURES
  groupAvatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  groupAvatarMedium: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  groupAvatarSmall: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  logoSmall: {
    height: 30,
    width: 30,
  },
  avatarExtraSmall: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  avatarLarge: {
    height: 140,
    width: 140,
    borderRadius: 70,
  },

  // tags
  cardTagsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 5,
  },
  tag: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 50,
    marginTop: 2,
    marginRight: 2,
  },
  createTag: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    flexWrap: "nowrap",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 40,
    marginRight: 5,
    marginTop: 5,
  },
});
