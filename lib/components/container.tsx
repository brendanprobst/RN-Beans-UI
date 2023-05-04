import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useTheme } from "../styles/themeProvider";
import { Dim } from "../styles/theme";

export default function Container(props) {
  const { Colors } = useTheme();
  let flexDirection = "column";
  let flexWrap = "nowrap";
  let backgroundColor = "transparent";
  let alignItems = "center";
  let justifyContent = "flex-start";

  let width: number | null | string = null;
  if (props.minWidth) {
    width = null;
  } else if (props.small) {
    width = Dim.width * 0.4;
  } else if (props.medium) {
    width = Dim.width * 0.6;
  } else if (props.large) {
    width = Dim.width * 0.8;
  } else if (props.fullWidth) {
    width = "100%";
  } else if (props.width) {
    width = props.width;
  }

  if (props.row) {
    flexDirection = "row";
  }
  if (props.column) {
    flexDirection = "column";
  }
  if (props.rowReverse) {
    flexDirection = "row-reverse";
  }
  if (props.wrap) {
    flexWrap = "wrap";
  }

  if (props.alignStart) {
    alignItems = "flex-start";
  } else if (props.alignEnd) {
    alignItems = "flex-end";
  } else {
    alignItems = "center";
  }

  if (props.justifyCenter) {
    justifyContent = "center";
  } else if (props.justifyEnd) {
    justifyContent = "flex-end";
  } else if (props.justifyBetween) {
    justifyContent = "space-between";
  } else if (props.justifyStart) {
    justifyContent = "flex-start";
  } else if (props.justifyEvenly) {
    justifyContent = "space-evenly";
  } else {
    justifyContent = "flex-start";
  }

  if (props.bg) {
    backgroundColor = Colors.background;
  } else if (props.fg) {
    backgroundColor = Colors.foreground;
  } else if (props.primary) {
    backgroundColor = Colors.primary;
  } else if (props.border) {
    backgroundColor = Colors.border;
  } else {
    backgroundColor = "transparent";
  }

  if (props.onPress || props.onLongPress) {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        onLongPress={props.onLongPress}
        disabled={props.disabled}
        delayPressIn={props.delayPressIn}
        style={{
          width: width,
          height: props.height ? props.height : null,
          flex: props.flex ? props.flex : null,
          flexDirection: flexDirection,
          flexWrap: flexWrap,
          alignItems: alignItems,
          justifyContent: justifyContent,
          paddingVertical: props.paddingY,
          paddingHorizontal: props.paddingX,
          paddingLeft: props.paddingL,
          paddingRight: props.paddingR,
          paddingTop: props.paddingT,
          paddingBottom: props.paddingB,
          padding: props.padding,
          marginVertical: props.marginY,
          marginHorizontal: props.marginX,
          marginLeft: props.marginL,
          marginRight: props.marginR,
          marginTop: props.marginT,
          marginBottom: props.marginB,
          margin: props.margin,
          borderRadius: props.borderRadius,
          borderWidth: props.borderWidth ? props.borderWidth : 0,
          borderStyle: "solid",
          borderColor: props.borderColor,
          backgroundColor: backgroundColor,
          ...props.style,
        }}
      >
        {props.children}
      </TouchableOpacity>
    );
  } else {
    return (
      <View
        style={{
          width: width,
          height: props.height ? props.height : null,
          flex: props.flex ? props.flex : null,
          flexDirection: flexDirection,
          flexWrap: flexWrap,
          alignItems: alignItems,
          justifyContent: justifyContent,
          paddingVertical: props.paddingY,
          paddingHorizontal: props.paddingX,
          paddingLeft: props.paddingL,
          paddingRight: props.paddingR,
          paddingTop: props.paddingT,
          paddingBottom: props.paddingB,
          padding: props.padding,
          marginVertical: props.marginY,
          marginHorizontal: props.marginX,
          marginLeft: props.marginL,
          marginRight: props.marginR,
          marginTop: props.marginT,
          marginBottom: props.marginB,
          margin: props.margin,
          borderRadius: props.borderRadius,
          borderWidth: props.borderWidth ? props.borderWidth : 0,
          borderStyle: "solid",
          borderColor: props.borderColor,
          backgroundColor: backgroundColor,
          ...props.style,
        }}
      >
        {props.children}
      </View>
    );
  }
}
