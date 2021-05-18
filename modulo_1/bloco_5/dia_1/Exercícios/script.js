function changeText() {
  document.getElementsByTagName("p")[1].innerText = "Trabalhando.";
}
changeText();

function changeToGreen() {
  document.getElementsByClassName("main-content")[0].style.backgroundColor =
    "rgb(76,164,109)";
}
changeToGreen();

function changeToWhite() {
  document.getElementsByClassName("center-content")[0].style.backgroundColor =
    "white";
}
changeToWhite();

function fixH1() {
  document.getElementsByTagName("h1")[0].innerText =
    "Exercício 5.1 - JavaScript";
}
fixH1();

function pToUpperCase() {
  for (
    let index = 0;
    index < document.getElementsByTagName("p").length;
    index += 1
  ) {
    document.getElementsByTagName("p")[
      index
    ].innerText = document
      .getElementsByTagName("p")
      [index].innerText.toUpperCase();
  }
}
pToUpperCase();

function displayToConsole() {
  for (
    let index = 0;
    index < document.getElementsByTagName("p").length;
    index += 1
  ) {
    console.log(document.getElementsByTagName("p")[index].innerText);
  }
}
displayToConsole();