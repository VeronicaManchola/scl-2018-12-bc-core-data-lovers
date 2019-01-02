let mainBox = document.getElementById("root");
let createCard;

const idResult = printId(data);
const numberResult = printNumber(data);
const nameResult = printName(data);
const imageResult = printImage(data);
const typeResult = printType(data);

window.onload=function(){

  document.getElementById("root").innerHTML = "";

  for(i=0; i < idResult.length; i++){
    let finalType = [];
    createCard = document.createElement("div");
    createCard.className = "card";
    mainBox.appendChild(createCard);
    for(a=0; a < typeResult[i].length; a++){
      if(typeResult[i][a] === "Grass"){
        finalType.push("Planta");
      }else if(typeResult[i][a] === "Poison"){
        finalType.push("Veneno");
      }else if(typeResult[i][a] === "Fire"){
        finalType.push("Fuego");
      }else if(typeResult[i][a] === "Bug"){
        finalType.push("Bicho");
      }else if(typeResult[i][a] === "Flying"){
        finalType.push("Volador");
      }else if(typeResult[i][a] === "Normal"){
        finalType.push("Normal");
      }else if(typeResult[i][a] === "Electric"){
        finalType.push("Eléctrico");
      }else if(typeResult[i][a] === "Ground"){
        finalType.push("Tierra");
      }else if(typeResult[i][a] === "Water"){
        finalType.push("Agua");
      }else if(typeResult[i][a] === "Fighting"){
        finalType.push("Lucha");
      }else if(typeResult[i][a] === "Psychic"){
        finalType.push("Psíquico");
      }else if(typeResult[i][a] === "Rock"){
        finalType.push("Roca");
      }else if(typeResult[i][a] === "Ghost"){
        finalType.push("Fantasma");
      }else if(typeResult[i][a] === "Ice"){
        finalType.push("Hielo");
      }else if(typeResult[i][a] === "Dragon"){
        finalType.push("Dragón");
      }
    }
    createCard.innerHTML += "<h4>" + numberResult[i] + " " + nameResult[i] + "</h4>" + "<img src=" + 
    imageResult[i] + ">" + "<p>" + finalType.join(" ") + "</p>";
  }
};

document.getElementById("type").addEventListener("change", () => {

  document.getElementById("root").innerHTML = "";

  let selectedType = document.getElementById("type").value;
  for(i=0; i<typeResult.length; i++){
    let finalType = [];
    
    if(typeResult[i][0] === selectedType || typeResult[i][1] === selectedType){
      createCard = document.createElement("div");
      createCard.className = "card";
      mainBox.appendChild(createCard);
      for(a=0; a < typeResult[i].length; a++){
        if(typeResult[i][a] === "Grass"){
          finalType.push("Planta");
        }else if(typeResult[i][a] === "Poison"){
          finalType.push("Veneno");
        }else if(typeResult[i][a] === "Fire"){
          finalType.push("Fuego");
        }else if(typeResult[i][a] === "Bug"){
          finalType.push("Bicho");
        }else if(typeResult[i][a] === "Flying"){
          finalType.push("Volador");
        }else if(typeResult[i][a] === "Normal"){
          finalType.push("Normal");
        }else if(typeResult[i][a] === "Electric"){
          finalType.push("Eléctrico");
        }else if(typeResult[i][a] === "Ground"){
          finalType.push("Tierra");
        }else if(typeResult[i][a] === "Water"){
          finalType.push("Agua");
        }else if(typeResult[i][a] === "Fighting"){
          finalType.push("Lucha");
        }else if(typeResult[i][a] === "Psychic"){
          finalType.push("Psíquico");
        }else if(typeResult[i][a] === "Rock"){
          finalType.push("Roca");
        }else if(typeResult[i][a] === "Ghost"){
          finalType.push("Fantasma");
        }else if(typeResult[i][a] === "Ice"){
          finalType.push("Hielo");
        }else if(typeResult[i][a] === "Dragon"){
          finalType.push("Dragón");
        }
      }
      createCard.innerHTML += "<h4>" + numberResult[i] + " " + nameResult[i] + "</h4>" + "<img src=" + 
      imageResult[i] + ">" + "<p>" + finalType.join(" ") + "</p>";
     }
  }
});

document.getElementById("order").addEventListener("change", () => {

  document.getElementById("root").innerHTML = "";
  let selectedOrder = document.getElementById("order").value;
  if(selectedOrder === "az"){
    console.log(organize.sortedAz(data))
  }else if(selectedOrder === "za"){
    console.log(organize.sortedZa(data))
  }else if(selectedOrder === "lower"){
    console.log(organize.sortedLower(data))
  }else if(selectedOrder === "higher"){
    console.log(organize.sortedHigher(data))
  }
});