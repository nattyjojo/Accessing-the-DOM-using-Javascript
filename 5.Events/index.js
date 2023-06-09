const _initTime = Date.now();
const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  clickedColor = e.target.classList[1];
  // console.log(clickedColor);
  // console.log(getElapsedTime());
  // Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
  const displayOnClick = () => {
    const getDisplayedSquareWrapper = document.querySelector(
      ".displayedsquare-wrapper"
    );
    const Newdiv = document.createElement("div");
    Newdiv.className = "displayedsquare";
    Newdiv.style.backgroundColor = clickedColor;
    getDisplayedSquareWrapper.appendChild(Newdiv);

    // Create a new <li> in the log below to state when the action was done
    let li = document.createElement("li");
    // Log when the spacebar is used the same way you used for the generated squares.
    li.innerText = `${getElapsedTime()} Created a new ${clickedColor} square `;
    let ul = document.querySelector("ul");
    ul.appendChild(li);
  };
  displayOnClick();
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
  //i started here
}
// Add an event listener on the document <body>, listening for the keypress event. (hint: have a look at this)
document.body.addEventListener("keypress", function(event){
    let displayAlert = alert("have a look at this");

});

// When the spacebar is hit randomly change the background color of the whole page
document.addEventListener("keydown", function (event) {
    let col = "123456789ABCDEF";
    let colorAppend = "#"
    for(let i = 0; i < 6; i++){
        let numGen =  Math.floor(Math.random() * col.length);
        colorAppend += col[numGen];
    }
    if (event.code === "Space") {
        document.body.style.backgroundColor = colorAppend;
      }
    
 
});

document.addEventListener("keydown", function(event){
    if(event.code === "i"){
        alert("hekokoko")
       


    }
})

/*    When the l key is pressed the log gets deleted (erases the generated <li>s). Mind you: 
    using a delete in a for loop might cause issues (as the amount of items to loop over changes), 
    so a while loop might be a good choice instead.
    

    When the s key is pressed the squares get deleted (erases the generated squares)
     Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square

*/
