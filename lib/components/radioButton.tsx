import React from "react";
import Icon from "./icons";
export default function RadioButton(props) {
  return (
    <Icon
      name={props.selected ? "radio-button-on" : "radio-button-off"}
      primary={props.primary}
    />
  );
}
