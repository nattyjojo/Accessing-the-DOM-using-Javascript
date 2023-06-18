

// Display the document title in the console
console.log(document.title);

// Change the document title to Modifying the DOM
document.title="Modifying the DOM";

// Change the background color of the body to hot pink (#FF69B4). If that worked, try with a random color as an extra challenge. (tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).
let colors = "0123456789ABCDEF";
let generatedColor = "#";
for(let i = 0; i < 6; i++){
    generatedColor += colors[Math.floor(Math.random() * colors.length)];
}
document.body.style.backgroundColor = generatedColor

// Using the children method and a for ... of loop, display every children elements of the second child element of your document
let documentSecondElement = document.body.children[1];
let documentSecondElementChildren = documentSecondElement.children;
console.log(documentSecondElementChildren)


// (display all children elements of the <body>)
console.log(document.body.children)


