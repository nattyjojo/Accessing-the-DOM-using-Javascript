
// Select the last child of the <ol> tag and put it at the beginning of the list

let ol = document.querySelector("ol");
let perentOl = ol.children[4];
ol.insertBefore(perentOl, ol.children[0]);

// Move the <h2> of the third section in the second one and vice-versa
let sections = document.querySelectorAll("section");
let secondSection = sections[1];
let secondSectionHead = secondSection.children[0];
let secondSectionParagraph = secondSection.children[1];
let thirdSection = sections[2].children[0];
let thirdSectionHead = thirdSection.children[0];
let thirdSectionParagraph = thirdSection.children[1];
secondSection.insertBefore(thirdSectionHead, secondSectionParagraph);
thirdSection.insertBefore(secondSectionHead, thirdSectionParagraph);

// Delete the last section from the DOM, we don't need it anyways
let deletSection = sections[sections.length -1].remove();
