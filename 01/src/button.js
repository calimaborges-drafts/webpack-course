/**
 *
 * @param {string} buttonName
 * @returns {Element}
 */
function makeButton(buttonName) {
  const buttonLabel = `Button: ${buttonName}`;

  const button = document.createElement("button");
  button.innerText = buttonLabel;

  return button;
}

module.exports = makeButton;
