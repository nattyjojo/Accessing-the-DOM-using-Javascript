// Added a keyup listener on the first input field, so that once you type a letter in this field,
// it goes into the <span id="display-firstname">.
// The content of the field and the span should always remain the same.
let myfunction = (event) => {
  let getFirstInput = document.getElementById("firstname").value;
  document.getElementById("display-firstname").innerText = getFirstInput;
};
let getInput = document
  .getElementById("firstname")
  .addEventListener("keyup", myfunction);

// Added a keyup listener on the second input (the number input),
// so that if the age is below 18 the content of the section a-hard-truth remains hidden,
// otherwise show them this hard to swallow fact.
let checkAge = () => {
  let age = document.getElementById("age").value;
  let getAhardTruthSection = document.getElementById("a-hard-truth");
  if (age < 18) {
    getAhardTruthSection.style.visibility = "hidden";
  } else {
    age > 18;
    getAhardTruthSection.style.visibility = "visible";
  }
};
let getSecondInput = document
  .getElementById("age")
  .addEventListener("keyup", checkAge);

// Added a keyup listener on both fields and show a visual
// hint (for instance turn the field red) if the password is too short (less than 6 characters)
// or if the password and its confirmation do not match.
let checkPass = (event) => {
  let getEnterPassValue = document.getElementById("pwd").value;
  let getComfirmPassValue = document.getElementById("pwd-confirm").value;
  if (
    getEnterPassValue === getComfirmPassValue &&
    getEnterPassValue.length >= 6 &&
    getComfirmPassValue.length >= 6
  ) {
    document.getElementById("pwd").style.border = "2px solid green";
    document.getElementById("pwd-confirm").style.border = "2px solid green";
  } else {
    document.getElementById("pwd").style.border = "2px solid red";
    document.getElementById("pwd-confirm").style.border = "2px solid red";
  }
};
let getEnterPass = document
  .getElementById("pwd")
  .addEventListener("keyup", checkPass);
let getComfirmPass = document
  .getElementById("pwd-confirm")
  .addEventListener("keyup", checkPass);

// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use,
// we'll say that the dark mode is just turning the background black and the text white.
let getselected = document.getElementById("toggle-darkmode")
getselectedEvent = document.addEventListener("change", function(){
    if(getselected.value === "dark"){
        document.body.style.backgroundColor="#070707";
        document.body.style.color="darkgrey";
    }else{
        document.body.style.backgroundColor="darkgrey";
        document.body.style.color="#070707";
    }
})
