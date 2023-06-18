
const ulElement = document.querySelector("ul");
const nodeList = ulElement.children;
// Useing childNodes to list all the children from the <ul>
const listchildNodes = ulElement.childNodes;
console.log(listchildNodes);
// Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1
for(let i=0; i<listchildNodes.length; i++){
    if(listchildNodes[i].nodeType === 1){
        console.log(listchildNodes[i])
    }
}
 // Write a for loop to iterate over every child. In this loop:

 for(let b = 0; b < ulElement.childNodes.length; b++){
    console.log(ulElement.childNodes[b])
 }

// Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list using javascript

for(let i = 0; i < nodeList.length; i++){
    if(nodeList[i].nodeType === 1){
    }
    if(nodeList[i].textContent === "Fast and Furious" && i > 0){
        // Since Fast and Furious is the most important franchise ever, add a class .important to the element
        nodeList[i].className="important"
        ulElement.insertBefore(nodeList[i], nodeList[0]);
        
    }
}
// Add an eventListener on every item of the list. If the item is clicked an alert() pops up to display the name of clicked element
for(let i = 0; i < nodeList.length; i++){
    let addEvent = nodeList[i].addEventListener("click", function(event){
        // Add a special condition to the previous function if the clicked item is Fast and Furious the alert() should display The most important franchise ever, 
        // the story of DOM(inic) Toretto's family. It's not about car, it's about family.
        if(event.target.textContent === "Fast and Furious"){
            alert("The most important franchise ever,  the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
        }else{
            alert(event.target.textContent);
        }       
    })
}

// (*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful).
for (let f = 0; f < nodeList.length; f++){
    for(let k = 0; k < nodeList.length; k++){
        if(nodeList[f].isEqualNode(nodeList[k]) && f !== k){
            ulElement.removeChild(nodeList[k])
        }
    }

}

// (*) Add an eventListener on the document body, listening for keyup. When pressing the r key of the keyboard the list should get sorted in a random order, 
// however Fast and Furious should remain the first element (most important franchise ever, remember?)

// function to generate random numbers depending on lenght of the list to sort randomly
let checkDuplicat = {};
let nonDuplicat = [];
let randomGenerator = (number) =>{
  for(let i = nonDuplicat.length; nonDuplicat.length
     !== nodeList.length; i++){
    let randomNum = Math.floor(Math.random()*number);
    // filter duplicats in random generator
    if (checkDuplicat[randomNum] === undefined){
        checkDuplicat[randomNum] = 1;
        nonDuplicat.push(randomNum)
    }
    checkDuplicat[randomNum]++
  }
}
randomGenerator(nodeList.length);
// When pressing the r key of the keyboard the list should get sorted in a random order 

document.body.addEventListener("keyup", function(event){
    let keyUp = event.key;
    if(keyUp === 'r'){
        for(let i = 0; i < nonDuplicat.length; i++){
            if(nodeList[i].textContent === "Fast and Furious"){
                continue;
            }else{
                ulElement.appendChild(nodeList[i])
            }
        }
        /*
    (*) Modify the previous function so that when you press the letter d of your keyboard, the Fast and Furious element gets cloned
    Create a new <div> before the list, using createElement and insertBefore
    Using createElement, create a <select> tag into the previously created <div>, with two <option>s in it: "important franchises" and "normal franchises"
    Add an eventListener to the <select>, on change, if the option "important franchise" is chosen, only display items of the list that have the class .important. (hint: you can toggle visibility using element.style.visibility = 'hidden')
        */
    }else{
        keyUp === "d";
        
        let optionElementOne = document.createElement("option");
        optionElementOne.textContent="normal franchises";
        let optionElementtwo = document.createElement("option");
        optionElementtwo.textContent="important franchises";
        let selectElement = document.createElement("select");
        selectElement.append(optionElementOne, optionElementtwo)
        
        let nodeToclone = nodeList[0]
        let cloned =  nodeToclone.cloneNode(true)


        let divElement = document.createElement("div");
        divElement.appendChild(cloned)
        document.body.insertBefore(divElement,ulElement);
        divElement.insertBefore(selectElement,cloned)
        selectElement.addEventListener("change", function(event){
            if (event.target.value === "important franchises"){
                let findImportantClass =  document.getElementsByClassName("important")
                for(let i = 0; i < nodeList.length; i++){
                    if(nodeList[i].classList.contains("important")){
                        continue

                    }else{
                        nodeList[i].style.visibility = "hidden"
                    }

                }
              
            }
           
        })

    }

})


