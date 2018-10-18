import "./base.css";
import "./footer.css";

import makeButton from "./button";
import { footer } from "./footer";
import { makeColorStyle } from "./button.style";
import { input } from "./input";

const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("blue");

document.body.appendChild(input());
document.body.appendChild(button);
document.body.appendChild(footer);
