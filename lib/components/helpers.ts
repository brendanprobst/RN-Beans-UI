import { MarginType, PaddingType } from "lib/types";

export function handlePadding(padding): PaddingType {
  if (padding) {
    if (padding.length === 4) {
      return {
        paddingTop: padding[0],
        paddingRight: padding[1],
        paddingBottom: padding[2],
        paddingLeft: padding[3],
      };
    }
    if (padding.length === 2) {
      return {
        paddingVertical: padding[0],
        paddingHorizontal: padding[1],
      };
    }
    if (padding.length === 1) {
      return {
        padding: padding[0],
      };
    } else
      return {
        padding: 0,
      };
  }
}
export function handleMargin(margin): MarginType {
  if (margin) {
    if (margin.length === 4) {
      return {
        marginTop: margin[0],
        marginRight: margin[1],
        marginBottom: margin[2],
        marginLeft: margin[3],
      };
    }
    if (margin.length === 2) {
      return {
        marginVertical: margin[0],
        marginHorizontal: margin[1],
      };
    }
    if (margin.length === 1) {
      return {
        margin: margin[0],
      };
    } else
      return {
        margin: 0,
      };
  }
}
