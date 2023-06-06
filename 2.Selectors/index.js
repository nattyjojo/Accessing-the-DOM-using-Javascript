
let getAtrribut;
function getTag(a){
    getAtrribute = document.querySelectorAll(a);

}
// Add a title attribute to every element that has the important class
getTag(".important")
for(let items of getAtrribut){
    items.setAttribute("title", "important");
}


// Select all the img tags and loop through them. If they have no important class, turn their display property to none
getTag("img");
for(let x of getAtrribute){
   let getclass = x.getAtrribute("class");

    console.log(getclass);
}



/*
    Select all the img tags and loop through them. If they have no important class, turn their display property to none
    Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
    Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
*/