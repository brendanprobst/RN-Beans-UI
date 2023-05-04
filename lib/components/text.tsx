import { ColorTheme, FontSize, MarginType, PaddingType } from "lib/types";
import React from "react";
import { Text as RN_Text } from "react-native";
import { Font, FontWeight } from "../types";
import { useColors, useFonts } from "../styles/themeProvider";
import { handleMargin, handlePadding } from "./helpers";

interface TextProps {
  children: any;
  font?: Font;
  color?: keyof ColorTheme;
  size?: FontSize;
  weight?: FontWeight;
  align?: "left" | "right" | "center";
  padding?: [number, number, number, number] | [number, number] | [number];
  margin?: [number, number, number, number] | [number, number] | [number];
  style?: object;
}

//consider renaming this component to something more specific
export default function Text(props: TextProps) {
  const { body } = useFonts(); //returns font object
  const { text } = useColors(); //returns colors object
  // destructure props
  const {
    color = text,
    children = "",
    font = body.fontFamily,
    size = body.fontSize,
    weight = body.fontWeight,
    align = "left",
    padding = [0],
    margin = [0],
    ...otherProps
  } = props;
  let paddingStyles: PaddingType = handlePadding(padding);
  let marginStyles: MarginType = handleMargin(margin);

  return (
    <RN_Text
      style={[
        {
          color,
          fontFamily: font,
          fontSize: size,
          fontWeight: weight,
          textAlign: align,
        },
        { paddingStyles, marginStyles },
        props.style,
      ]}
      {...otherProps}
    >
      {props.children}
    </RN_Text>
  );
}
