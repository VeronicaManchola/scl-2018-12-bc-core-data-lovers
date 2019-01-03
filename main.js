let mainBox = document.getElementById("root");
let createCard;

const idResult = printId(data);
const numberResult = printNumber(data);
const nameResult = printName(data);
const imageResult = printImage(data);
const typeResult = printType(data);

window.onload = function () {

  //document.getElementById("root").innerHTML = "";

  for (i = 0; i < idResult.length; i++) {
    createCard = document.createElement("div");
    createCard.className = "card";
    mainBox.appendChild(createCard);
    createCard.innerHTML += "<h4>" + numberResult[i] + " " + nameResult[i] + "</h4>" + "<img src=" +
      imageResult[i] + ">" + "<p>" + typeResult[i] + "</p>" + "<p>";
  }
};

document.getElementById("type").addEventListener("change", () => {

  document.getElementById("root").innerHTML = "";

  let selectedType = document.getElementById("type").value;
  for (i = 0; i < typeResult.length; i++) {
    let eachType = typeResult[i];
    if (eachType[0] === selectedType) {
      createCard = document.createElement("div");
      createCard.className = "card";
      mainBox.appendChild(createCard);
      createCard.innerHTML += "<h4>" + numberResult[i] + " " + nameResult[i] + "</h4>" + "<img src=" +
        imageResult[i] + ">" + "<p>" + typeResult[i].join(" ") + "</p>";
    } else if (eachType[1] === selectedType) {
      createCard = document.createElement("div");
      createCard.className = "card";
      mainBox.appendChild(createCard);
      createCard.innerHTML += "<h4>" + numberResult[i] + " " + nameResult[i] + "</h4>" + "<img src=" +
        imageResult[i] + ">" + "<p>" + typeResult[i].join(" ") + "</p>";
    }
  }
});


