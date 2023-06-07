
let getAtrribut;
function getTag(a){
    getAtrribut = document.querySelectorAll(a);

}
// Add a title attribute to every element that has the important class
getTag(".important")
for(let items of getAtrribut){
    items.setAttribute("title", "important");
}


// Select all the img tags and loop through them. If they have no important class, turn their display property to none
getTag("img");
for(let imgs of getAtrribut){
    if(!imgs.classList.contains("important")){
        imgs.style.display="none";
    }
}
// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
getTag("p")
for(let content of getAtrribut){
    console.log(content.innerHTML + " class=" + content.classList);
}
// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
const paragraphs = getAtrribut;
for(let paragraph of paragraphs){
    if(!paragraph.classList.lenght){
        let generate = genColor();
        paragraph.style.color =generate;
    }
}

function genColor(){
    const colorLetters = "0123456789ABCDEF";
    let lettersMerg = "#";
    for(let i = 0; i < 6; i++){
        lettersMerg += colorLetters[Math.floor(Math.random() * colorLetters.length)];
    }
    return lettersMerg;
}




