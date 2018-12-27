let mainBox = document.getElementById("root");

const idResult = printId(data);
const numberResult = printNumber(data);
const nameResult = printName(data);
const imageResult = printImage(data);
const typeResult = printType(data);

document.getElementById("btn").addEventListener("click", () => {

  document.getElementById("root").innerHTML = "";
  
  for(i=0; i < idResult.length; i++){
    let createNumberCard = document.createElement("div");
    createNumberCard.className = "numberCard";
    mainBox.appendChild(createNumberCard);
    createNumberCard.innerHTML += "<h4>" + numberResult[i] + " " + nameResult[i] + "</h4>" + "<img src=" + 
    imageResult[i] + ">" + "<p>" + typeResult[i] + "</p>";
  }
});

