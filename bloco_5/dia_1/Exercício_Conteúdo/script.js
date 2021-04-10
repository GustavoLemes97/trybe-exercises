document.getElementById('header-container').style.backgroundColor = 'rgb(76,164,109)';

document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor =
  "pink";

for (
  let index = 0;
  index < document.querySelectorAll(".emergency-tasks div h3").length;
  index += 1
) {
  document.querySelectorAll(".emergency-tasks div h3")[
    index
  ].style.backgroundColor = "purple";
}

document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor =
  "yellow";

for (
  let index = 0;
  index < document.querySelectorAll(".no-emergency-tasks div h3").length;
  index += 1
) {
  document.querySelectorAll(".no-emergency-tasks div h3")[
    index
  ].style.backgroundColor = "black";
}

document.getElementById('footer-container').style.backgroundColor = '#034736';
document.getElementById('footer-container').style.position = 'fixed';
document.getElementById('footer-container').style.bottom = '0';
document.getElementById('footer-container').style.width = '100%';

