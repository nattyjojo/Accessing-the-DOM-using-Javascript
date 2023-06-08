// Modify the script.js to create a new <section> with a random background-color for each learner in your group.
// This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>

// Find a way so that everytime you load the page the order of the elements changes!

const groupList = [
  "LeslieL",
  "Ignace",
  "Leila_1111",
  "itsafa",
  "Louis",
  "Lucie",
  "Noah",
  "lexandra",
  "Jean-Louis",
  "Antoine Stru",
  "Athi Lakshmi",
  "azizabacc",
  "camilaassunca",
  "Florentina",
  "francesca",
  "Giorgi Patsia",
  "GlaucielleSa",
  "princekaf",
  "Raad",
  "Walid",
  "William Polet",
  "ZuzanaDroppova",
  "Alizée",
  "adam98",
  "Louis",
  "SophieB",
];
groupList.sort();
let picColor = "0123456789ABCDEF";
let storeColor = "#";
const randomBg = () => {
  let coun = "123456";
  for (let i of coun) {
    storeColor += picColor[Math.floor(Math.random() * picColor.length)];
  }
}
const create = () => {
  for (let x = 0; x < groupList.length; x++) {
    randomBg();
    let section = document.createElement("section");
    const paragraph = document.createElement("p");
    section.appendChild(paragraph);
    const getArticle = document.querySelector("article");

    getArticle.appendChild(section);
    let Paragraphs = document.querySelectorAll("p");
    let add = (Paragraphs[x].innerText = groupList[x]);
    let bgcolor = (section.style.backgroundColor = storeColor);
    let G = storeColor.slice(3, 5);
    if (G > 00) {
      section.style.color = "white";
    } else {
      section.style.color = "black";
    }
    storeColor = "#";
    
  }
  
}

create();
let getSections = document.querySelectorAll("section");
const randomSection = () =>{
  let select = Math.floor(Math.random()*groupList.length);

}
randomSection();
/*
    If the background is dark the text should be white, if the background is light the text should be black
    Find a way so that everytime you load the page the order of the elements changes!
*/
