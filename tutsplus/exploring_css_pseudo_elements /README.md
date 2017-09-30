Objective:
CSS Pseudo Classes Vs. Pseudo Elements?
Using Pseudo elements effectively
Incorporating Pseudo Elements to your content
Pseudo Classes Vs. Pseudo Elements

Pseudo Classes

- pseudo selector targeting elements that match a certain criteria or state
- the name of the pseudo class is followed by a single colon

Examples:
:hover - allows you to target & style a link in the hover state
:first-child - targeting a parent’s first child element in a content, for example the first <li> element from a group of other list items from its <ul> parent
:nth-child - allows you to be specific in targeting elements
:not() - allows you to target certain items that do not meet a specified criteria
Pseudo Elements

- target a certain part of an element
- the name of the pseudo class is preceded by two colons (most browsers support either : or ::

Examples:
::before - allows to add and style content that comes before a given element
::after - allows to add and style content after an element
::first-letter - allows you to style the first letter in paragraph
::first-line - allows styling of first line in paragraph
::selection - targets a certain state of an element (allows styling of highlighted text)
::backdrop
The ::before Pseudo Element

- allows to add and style content that comes before a given element
- a content property must be defined within both  ::before and ::after for the pseudo element to take effect
- by default the content property is inline but can be displayed as block or inline-block so as to take in their properties
The ::after Pseudo Element

- placement of content is after the element
- both ::after and ::before pseudo element cannot be highlight / selected on the Html page as they were created in CSS
The ::first-letter and ::first-line

- allows you to style the first letter of a given element or the first line of an element with multiple text lines
- no content property needed
- both ::first-letter and ::first-line can be highlighted on a page as they are part of Html markup
The ::backdrop Pseudo Element

- a box that the full screen element has behind it but sits above all other content
- sets the background style for elements displayed in full-screen mode
