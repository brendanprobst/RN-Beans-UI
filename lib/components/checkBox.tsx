import React from "react";
import Icon from "./icons";
export default function CheckBox(props) {
  return (
    <Icon
      lg={props.lg}
      md={!props.lg}
      type="MaterialCommunity"
      name={props.selected ? "checkbox-marked" : "checkbox-blank-outline"}
      primary={props.selected}
      secondary={!props.selected}
    />
  );
}
