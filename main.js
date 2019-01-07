let mainBox = document.getElementById("root");
let createCard;
let createTotal;

//Imprime tarjetas al cargar la pagina
window.onload = function () {

  document.getElementById("root").innerHTML = "";

  let selectedType = document.getElementById("type").value;
  const newData = filterData(data, selectedType);
  const totalPokemon = computeStats(newData);

  createTotal = document.createElement("h5");
  mainBox.appendChild(createTotal);

  createCard = document.createElement("div");
  mainBox.appendChild(createCard);

  createTotal.innerHTML = `Total de tu selección: ${totalPokemon}`

  newData.forEach(element => {
    createCard.innerHTML +=
      `<div class="col l3">
        <div class="card small">
        <div class="card-title">#${element.num} ${element.name}</div>
          <div class="card-image" style="overflow: initial">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
            <a class="btn-floating halfway-fab waves-effect waves-light #1D8696"><i class="material-icons">info</i></a>
          </div>
          <div class="card-content" style="font-size: 16px;padding: 20px 12px;">
            <p>${element.type.join(" - ")}</p>
          </div>
        </div>
      </div>`;
  });
};

document.getElementById("type").addEventListener("change", () => {

  document.getElementById("root").innerHTML = "";

  let selectedOrder = document.getElementById("order").value;
  let selectedType = document.getElementById("type").value;
  const dataOnSort = sortData(data, selectedOrder);
  const newData = filterData(dataOnSort,selectedType);
  const totalPokemon = computeStats(newData);

  createTotal = document.createElement("h5");
  mainBox.appendChild(createTotal);

  createCard = document.createElement("div");
  mainBox.appendChild(createCard);

  createTotal.innerHTML = `Total de tu selección: ${totalPokemon}`

  newData.forEach(element => {
    createCard.innerHTML +=
      `<div class="col l3">
        <div class="card small">
          <div class="card-title">#${element.num} ${element.name}</div>
          <div class="card-image" style="overflow: initial">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
            <a class="btn-floating halfway-fab waves-effect waves-light #1D8696"><i class="material-icons">info</i></a>
          </div>
          <div class="card-content" style="font-size: 16px;padding: 20px 12px;">
            <p>${element.type.join(" - ")}</p>
          </div>
        </div>
      </div>`;
  });
});

document.getElementById("order").addEventListener("change", () => {

  document.getElementById("root").innerHTML = "";
  let selectedOrder = document.getElementById("order").value;
  let selectedType = document.getElementById("type").value;
  const dataOnFilter = filterData(data,selectedType);
  const newData = sortData(dataOnFilter, selectedOrder);
  const totalPokemon = computeStats(newData);

  createTotal = document.createElement("h5");
  mainBox.appendChild(createTotal);

  createCard = document.createElement("div");
  mainBox.appendChild(createCard);

  createTotal.innerHTML = `Total de tu selección: ${totalPokemon}`

  createTotal
  newData.forEach(element => {
    createCard.innerHTML +=
      `<div class="col l3">
        <div class="card small">
          <div class="card-title">#${element.num} ${element.name}</div>
          <div class="card-image" style="overflow: initial">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
            <a class="btn-floating halfway-fab waves-effect waves-light #1D8696"><i class="material-icons">info</i></a>
          </div>
          <div class="card-content" style="font-size: 16px;padding: 20px 12px;">
            <p>${element.type.join(" - ")}</p>
          </div>
        </div>
      </div>`;
    });
  });