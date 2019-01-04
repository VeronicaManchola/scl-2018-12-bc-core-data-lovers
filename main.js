let mainBox = document.getElementById("root");
let createCard;

//Imprime tarjetas al cargar la pagina
window.onload=function(){

  document.getElementById("root").innerHTML = "";
  
  const newData = sortedLower(data);

  const idResult = printId(newData);
  const numberResult = printNumber(newData);
  const nameResult = printName(newData);
  const imageResult = printImage(newData);
  const typeResult = printType(newData);


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

  const newData = sortedLower(data);

  const numberResult = printNumber(newData);
  const nameResult = printName(newData);
  const imageResult = printImage(newData);
  const typeResult = printType(newData);

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
  let newData;
  if(selectedOrder === "az"){
    newData = sortedAz(data);
  }else if(selectedOrder === "za"){
    newData = sortedZa(data);
  }else if(selectedOrder === "lower"){
    newData = sortedLower(data);
  }else if(selectedOrder === "higher"){
    newData = sortedHigher(data);
  }

  const idResult = printId(newData);
  const numberResult = printNumber(newData);
  const nameResult = printName(newData);
  const imageResult = printImage(newData);
  const typeResult = printType(newData);

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
});