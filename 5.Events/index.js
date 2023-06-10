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
document.body.addEventListener("keypress", function (event) {
  alert("have a look at this");
});

// When the spacebar is hit randomly change the background color of the whole page
document.addEventListener("keydown", function (event) {
  let col = "0123456789ABCDEF";
  let colorAppend = "#";
  for (let i = 0; i < 6; i++) {
    let numGen = Math.floor(Math.random() * col.length);
    colorAppend += col[numGen];
  }
  if (event.code === "Space") {
    document.body.style.backgroundColor = colorAppend;
  }
});
// When the l key is pressed the log gets deleted (erases the generated <li>s). Mind you:
// using a delete in a for loop might cause issues (as the amount of items to loop over changes),
// so a while loop might be a good choice instead.
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyI") {
    let getli = document.querySelectorAll("li");
    let i = 0;
    while (i < getli.length) {
      getli[i].remove();
      i++;
    }
    // When the s key is pressed the squares get deleted (erases the generated squares)
  } else {
    event.code === "KeyS";
    let deletesquare = document.querySelectorAll(".displayedsquare");
    let i = 0;
    while (i < deletesquare.length) {
      deletesquare[i].remove();
      i++;
    }
  }
});
// notification templete
let closeNotification = document.createElement("btn");
closeNotification.className="closeNotification"
closeNotification.innerText = "close";
Object.assign(closeNotification.style, {
  display: "inline-block",
  marginLeft: "150px",
  padding: "4px",
  borderRadius: "10px",
  color: "white",
  backgroundColor: "black",
});

let notifcationContent = document.createElement("p");
notifcationContent.className="notifcationContent";
Object.assign(notifcationContent.style, {
  display: "flex",
  justifyContent: "space-around",
});

let notificationWrapper = document.createElement("div");
notificationWrapper.className = "notificationWrapper";
console.log(notificationWrapper.className);

Object.assign(notificationWrapper.style, {
  width: "200px",
  border: "2px solid grey",
  padding: "10px",
  color: "dark grey",
  position: "absolute",
  top: "40%",
  left: "50%",
  borderRadius: "10px",
  display: "none",
});
notificationWrapper.appendChild(closeNotification);
notificationWrapper.appendChild(notifcationContent);
//remmeber to complete

let getMain = document.querySelector("main");
getMain.style.position = "relative";
getMain.appendChild(notificationWrapper);

// Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square

let clickedSquareColor = (event) => {
  let getClass = event.target.className;
  if (getClass === "actionsquare lime") {
    let backGroundColor = "lime";
    let notificationWrapper = document.querySelector(".notificationWrapper");
    notificationWrapper.style.backgroundColor = backGroundColor;
    notifcationContent.innerText = `you clicked on ${backGroundColor}`;
    notificationWrapper.style.display = "block";
  } else if (getClass === "actionsquare violet") {
    backGroundColor = "violet";
    let notificationWrapper = document.querySelector(".notificationWrapper");
    notificationWrapper.style.backgroundColor = backGroundColor;
    notifcationContent.innerText = `you clicked on ${backGroundColor}`;
    notificationWrapper.style.display = "block";
  } else {
    getClass === "actionsquare orange";
    let backGroundColor = "orange";
    let notificationWrapper = document.querySelector(".notificationWrapper");
    document.querySelector(".notifcationContent")
    notifcationContent.innerText = `you clicked on ${backGroundColor}`;
    notificationWrapper.style.backgroundColor = backGroundColor;
    notificationWrapper.style.display = "block";
  }
};
let getMainColors = document.querySelectorAll(".actionsquare");
let i = 0;
while (i < getMainColors.length) {
  getMainColors[i].addEventListener("click", clickedSquareColor);
  i++;
}

document.querySelector(".closeNotification").addEventListener("click", function(event){
  document.querySelector(".notificationWrapper").style.display="none"
})
