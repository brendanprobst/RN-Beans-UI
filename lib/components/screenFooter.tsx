import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

export default function ScreenFooter({ children, type, noTabs, height }) {
  const footerContainer: StyleProp<ViewStyle> = {
    position: "absolute",
    bottom: noTabs ? 0 : 20,
    left: 10,
    right: 10,
    height: height ? height : 100,
  };
  let contentContainer = {};
  if (type === "buttons") {
    contentContainer = {
      height: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
    };
  }

  return (
    <View style={footerContainer}>
      <View style={contentContainer}>{children}</View>
    </View>
  );
}
