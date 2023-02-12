import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
export interface AccordionProps {
  children: JSX.Element | JSX.Element[];
}
export default function Accordion(props: AccordionProps) {
  // list has data type of

  const [open, setOpen] = useState(false);
  const height = open ? "auto" : 0;
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
