import "./base.css";
import "./footer.css";

import image from "../image/webpack-logo.jpg";

import makeButton from "./button";
import { footer } from "./footer";
import { makeColorStyle } from "./button.style";
import { input } from "./input";
import makeImage from "./image";

const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("blue");

const webpackLogo = makeImage(image);
webpackLogo.style = "width: 100%";

document.body.appendChild(input());
document.body.appendChild(button);
document.body.appendChild(webpackLogo);
document.body.appendChild(footer);
