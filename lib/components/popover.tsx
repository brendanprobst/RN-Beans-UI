import React from "react";
import { View } from "react-native";
import { useTheme } from "../styles/themeProvider";
import { Dim } from "../styles/theme";
export interface PopOverProps {
  children: React.ReactNode;
  visible: boolean;
  onDismiss: () => void;
  anchor: React.ReactNode;
  anchorPosition?: "top" | "bottom" | "left" | "right";
  anchorOffset?: number;
  anchorOrigin?: {
    horizontal: "left" | "center" | "right";
    vertical: "top" | "center" | "bottom";
  };
  popoverOrigin?: {
    horizontal: "left" | "center" | "right";
    vertical: "top" | "center" | "bottom";
  };
  popoverStyle?: React.CSSProperties;
  popoverClassName?: string;
  popoverWidth?: number;
  popoverHeight?: number;
  popoverMargin?: number;
  popoverPadding?: number;
  popoverBorderRadius?: number;
  popoverBorderWidth?: number;
  popoverBorderColor?: string;
  popoverBackgroundColor?: string;
  popoverShadowColor?: string;
  popoverShadowOpacity?: number;
  popoverShadowRadius?: number;
  popoverShadowOffset?: {
    width: number;
    height: number;
  };
  popoverElevation?: number;
  popoverZIndex?: number;
  popoverTransitionDuration?: number;
  popoverTransitionTimingFunction?:
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "step-start"
    | "step-end"
    | "steps"
    | "cubic-bezier";
  popoverTransitionDelay?: number;
}

export default function PopOver(props: PopOverProps) {
  return <View>{props.children}</View>;
}
