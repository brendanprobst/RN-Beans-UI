import React, { useContext } from "react";
import Text from "./text";
import Container from "./container";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import { useTheme } from "../styles/themeProvider";
import { MarginType, PaddingType } from "lib/types";
import { handlePadding } from "./helpers";
type ButtonProps = {
  children: string;
  onPress?: () => void;
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  variant?: "contained" | "outlined" | "text" | "primary" | "link";
  color?: string;
  borderColor?: string;
  textColor?: string;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  size?: "xs" | "sm" | "md" | "lg";
  isFullWidth?: boolean;
  isHalfWidth?: boolean;
  // minWidth?: boolean;
  // maxWidth?: number | string;
  width?: number | string;
  flex?: number;
  padding?: PaddingType;
  margin?: MarginType;
  style?: any;
};
export default function Button(props: ButtonProps) {
  const { Colors } = useTheme();
  // destructure props
  const {
    children = "",
    onPress = () => {},
    isLoading = false,
    loadingText = "Loading...",
    disabled = false,
    variant = "contained",
    size = "md",
    isFullWidth = false,
    isHalfWidth = false,
    minWidth = false,
    maxWidth = false,
    padding = [0],
    margin = [0],
    ...otherProps
  } = { ...props };
  let paddingStyles: PaddingType = {};
  let marginStyles: MarginType = {};
  let fontSize = 0;
  if (props.size === "xs") {
    paddingStyles = handlePadding([4, 8]);
    fontSize = 12;
    minWidth = 50;
    fontFamily = "OpenSans_400Regular";
  }
  if (props.size === "sm") {
    padding = 5;
    minWidth = 60;
    fontSize = 14;
    fontFamily = "OpenSans_400Regular";
  } else if (props.size === "md" || props.size === undefined) {
    padding = 6;
    minWidth = 90;
    fontSize = 16;
    fontFamily = "OpenSans_500Medium";
  } else if (props.size === "lg") {
    padding = 8;
    minWidth = 120;
    fontSize = 20;
    fontFamily = "OpenSans_600SemiBold";
  }
  if (props.isFullWidth) {
    width = "100%";
  }
  if (props.isHalfWidth) {
    width = "48%";
  }
  if (props.minWidth) {
    width = undefined;
    minWidth = undefined;
  }
  if (props.width) {
    width = props.width;
  }

  // border
  let borderWidth: number = 0;
  let borderRadius: number = 5;
  // color
  let textColor = Colors.text;
  let backgroundColor = Colors.primary;
  let opacity = 1;

  if (props.disabled) {
    opacity = 0.5;
  }
  // Variants
  if (props.variant === "contained") {
    backgroundColor = Colors.primary;
    textColor = Colors.onPrimary;
    borderWidth = 1;
    borderColor = Colors.primary;
  }
  if (props.variant === "primary") {
    backgroundColor = Colors.primary;
    textColor = Colors.onPrimary;
    borderColor = "transparent";
  }

  if (props.variant === "outlined") {
    borderWidth = 1;
    backgroundColor = "transparent";
    borderColor = Colors.border;
    textColor = Colors.text;
  } else if (props.variant === "text") {
    backgroundColor = "transparent";
    borderColor = "transparent";
    textColor = Colors.text;
  } else if (props.variant === "link") {
    backgroundColor = "transparent";
    borderColor = "transparent";
    textColor = Colors.link;
  } else if (props.color) {
    backgroundColor = props.color;
    borderColor = Colors.border;
    textColor = Colors.text;
  }
  const touchableStyles: StyleProp<ViewStyle> = {
    width: width,
    alignSelf: "center",
    padding: margin,
    // paddingTop: props.marginT,
    // paddingBottom: props.marginB,
    // paddingLeft: props.marginL,
    // paddingRight: props.marginR,
    // paddingHorizontal: props.marginX,
    // marginVertical: props.marginY,
  };
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      style={touchableStyles}
      {...otherProps}
    >
      <Container
        alignCenter
        justifyCenter
        row
        style={{
          width: !props.isHalfWidth ? width : "100%",
          minWidth: minWidth,
          opacity: opacity,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: borderWidth,
          paddingVertical: padding,
          paddingHorizontal: padding * 2 + 5,
          borderRadius: borderRadius,
          borderTopLeftRadius: borderRadius,
          borderBottomLeftRadius: borderRadius,
          alignSelf: "center",
          flexDirection: "row",
          flex: props.flex,
          ...props.style,
        }}
      >
        {props.isLoading && (
          <View style={{ marginRight: props.loadingText ? 5 : 0 }}>
            <Text>Loading</Text>
          </View>
        )}
        {props.leftIcon && !props.isLoading && (
          <View style={{ marginRight: padding / 2 }}>{props.leftIcon}</View>
        )}

        <Text
          buttonText
          center
          style={{
            color: textColor,
            fontSize: fontSize,
            fontFamily: fontFamily,
          }}
        >
          {!props.isLoading
            ? props.children
            : props.loadingText
            ? props.loadingText
            : ""}
        </Text>
        {props.rightIcon && !props.isLoading && (
          <View style={{ marginLeft: padding / 2 }}>{props.rightIcon}</View>
        )}
      </Container>
    </TouchableOpacity>
  );
}
