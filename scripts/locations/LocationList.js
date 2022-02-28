import { getLocation } from "./LocationData.js";
import { Location } from "./LocationHTML.js";

export const LocationList = () => {

  // Get a reference to the location on the DOM you want to display the list of fish
  const contentElement = document.querySelector(".locationList")
  // Get the fish array
  const locations = getLocation()
  // Declare a variable to hold on to the fish HTML representation
  let tipHTMLRepresentation = "";
  // Loop over the array of fish
  for (const oneThingFromThePlace of locations) {
  tipHTMLRepresentation += Location(oneThingFromThePlace);
  }
  // Set the dom equal to the variable containing the fish html representations
  contentElement.innerHTML += `
      ${tipHTMLRepresentation}
  `
}