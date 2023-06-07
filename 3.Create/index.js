

const groupList = ["LeslieL", "Ignace", "Leila_1111", "itsafa", "Louis", "Lucie", "Noah", "lexandra",
 "Jean-Louis", "Antoine Stru", "Athi Lakshmi", "azizabacc", "camilaassunca", "Florentina", 
 "francesca", "Giorgi Patsia", "GlaucielleSa",
 "princekaf", "Raad", "Walid", "William Polet", "ZuzanaDroppova", "Alizée", "adam98", "Louis", "SophieB"
]
let picColor = "0123456789QBCDEF";
let storeColor = "#";
function randomBg(){
    let coun = "123456"
    for(let i of coun){
        storeColor += picColor[Math.floor(Math.random() * picColor.length)];
    }

}

function create(){  
    for(let x = 0; x < groupList.length; x++){
        let section = document.createElement("section");
        randomBg();
        // how do call randomBg to work?
        section.style.backgroundColor=storeColor;
        const paragraph = document.createElement("p");
        section.appendChild(paragraph);
        const getArticle = document.querySelector("article");
        getArticle.appendChild(section);
        
    }
    let Paragraphs = document.querySelectorAll("p");
    for(let c = 0; c < Paragraphs.length; c++){
        let add = Paragraphs[c].innerHTML=groupList[c];
    

    }
    

}

create();

/*
    Modify the script.js to create a new <section> with a random background-color for each learner in your group. 
    This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>

    If the background is dark the text should be white, if the background is light the text should be black
    Find a way so that everytime you load the page the order of the elements changes!

*/