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

document.getElementById("type").addEventListener("change", () => {

  document.getElementById("root").innerHTML = "";

  let selectedType = document.getElementById("type").value;
  for(i=0; i<typeResult.length; i++){
    let eachType = typeResult[i];
    if(eachType[0] === selectedType){
      let createNumberCard = document.createElement("div");
      createNumberCard.className = "numberCard";
      mainBox.appendChild(createNumberCard);
      createNumberCard.innerHTML += "<h4>" + numberResult[i] + " " + nameResult[i] + "</h4>" + "<img src=" + 
      imageResult[i] + ">" + "<p>" + typeResult[i] + "</p>";
    }else if(eachType[1] === selectedType){
      let createNumberCard = document.createElement("div");
      createNumberCard.className = "numberCard";
      mainBox.appendChild(createNumberCard);
      createNumberCard.innerHTML += "<h4>" + numberResult[i] + " " + nameResult[i] + "</h4>" + "<img src=" + 
      imageResult[i] + ">" + "<p>" + typeResult[i] + "</p>";
    }
  }
});