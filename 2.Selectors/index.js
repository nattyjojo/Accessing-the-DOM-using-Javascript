function getTag(a) {
  getTags = document.querySelectorAll(a);
  return getTags;
}
// Add a title attribute to every element that has the important class
let importantClass = getTag(".important");
for (let items of importantClass) {
  items.setAttribute("title", "This is an important item");
}

// Select all the img tags and loop through them. If they have no important class, turn their display property to none
let imgs = getTag("img");
for (let img of imgs) {
  if (!img.classList.contains("important")) {
    img.style.display = "none";
  }
}
// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
let paragraphs = getTag("p");
for (let paragraph of paragraphs) {
  if (paragraph.classList.length > 0) {
    console.log(paragraph.textContent + " " + paragraph.className);
  } else {
    console.log(paragraph.textContent);
  }
}
// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
for (let paragraph of paragraphs) {
  if (paragraph.classList.length < 1) {
    let generate = genColor();
    paragraph.style.color = generate;
  }
}

function genColor() {
  const colorLetters = "0123456789ABCDEF";
  let lettersMerg = "#";
  for (let i = 0; i < 6; i++) {
    lettersMerg +=
      colorLetters[Math.floor(Math.random() * colorLetters.length)];
  }
  return lettersMerg;
}
