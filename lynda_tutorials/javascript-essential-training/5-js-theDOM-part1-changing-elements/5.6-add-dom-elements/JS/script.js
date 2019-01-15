const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");

//using .append only
//captionElement.append(altText);
//FEATURED.append(captionElement);

var captionText = document.createTextNode(altText);

captionElement.appendChild(captionText);

//console.log(captionElement);

FEATURED.appendChild(captionElement);

THEIMAGE.setAttribute("alt",""); 