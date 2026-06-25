const image = document.getElementById("avatar");

image.addEventListener("click", function () {
  if (image.src.match("./images/furina.png")) {
    image.src = "./images/sucrose.png";
  } else {
    image.src = "./images/furina.png";
  } 
});