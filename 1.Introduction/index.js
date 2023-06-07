for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];
    if(!paragraph.classList.lenght){
        let generate = genColor();
        paragraph.style.color =generate;
    }
}

// Display the document title in the console
console.log(document.title);

// Change the document title to Modifying the DOM
document.title="Dom is been Explored";

// Change the background color of the body to hot pink (#FF69B4). If that worked, try with a random color as an extra challenge. (tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).
document.body.style.backgroundColor = "red";


// Using the children method and a for ... of loop, display every children elements of the second child element of your document (display all children elements of the <body>)

const getchildren = document.body.children;
let storeChildren = "";
for(let i = 0; i < getchildren.length; i++ ){
    storeChildren += getchildren[i].tagName + "<br>";
}//come back here
let bodyElements = document.getElementById("demo").innerHTML= storeChildren;
console.log(bodyElements)
    

