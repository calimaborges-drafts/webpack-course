import nav from "./nav";
import { top, bottom } from "./footer";
import button from "./button";
import { makeColorStyle } from "./button-styles";

console.log(
  nav(),
  button("My first button"),
  makeColorStyle("cyan"),
  top,
  bottom
);
