import { getTip } from "./TipData.js";
import { Tip } from "./TipHTML.js";

export const TipList = () => {

  // Get a reference to the location on the DOM you want to display the list of fish
  const contentElement = document.querySelector(".tipList")
  // Get the fish array
  const tips = getTip()
  // Declare a variable to hold on to the fish HTML representation
  let tipHTMLRepresentation = "";
  // Loop over the array of fish
  for (const oneThingFromTheList of tips) {
  tipHTMLRepresentation += Tip(oneThingFromTheList);
  }
  // Set the dom equal to the variable containing the fish html representations
  contentElement.innerHTML += `
      ${tipHTMLRepresentation}
  `
}
