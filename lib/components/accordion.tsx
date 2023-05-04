import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";

export interface AccordionProps {
  children: JSX.Element | JSX.Element[];
}
export default function Accordion(props: AccordionProps) {
  // list has data type of
  // todo: add animation for opening and closing
  const [open, setOpen] = useState(false);
  const bottomRadius = open ? 0 : 8;
  const containerStyle = {};
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => setOpen(!open)}
        style={{
          ...containerStyle,
          borderBottomLeftRadius: bottomRadius,
          borderBottomRightRadius: bottomRadius,
        }}
      >
        {props.children}
      </TouchableWithoutFeedback>
    </>
  );
}
