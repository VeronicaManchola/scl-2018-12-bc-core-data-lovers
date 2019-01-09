const data = POKEMON.pokemon;
let mainBody = document.getElementsByTagName("body")[0];
let header = document.getElementById("header");
let mainBox = document.getElementById("root");
let createCard;
let createTotal;
let createModal;

//Imprime tarjetas al cargar la pagina
window.onload = function () {

  document.getElementById("root").innerHTML = "";

  let selectedType = document.getElementById("type").value;
  const newData = pokemonData.filterData(data, selectedType);
  const totalPokemon = pokemonData.computeStats(newData);

  createTotal = document.createElement("h5");
  mainBox.appendChild(createTotal);

  createCard = document.createElement("div");
  mainBox.appendChild(createCard);

  createTotal.innerHTML = `Total de tu selección: ${totalPokemon}`

  newData.forEach(element => {
    createCard.innerHTML +=
      `<div class="col l3">
        <div class="card small">
          <a class="buttonCard" id="infobtn${element.id}" data-target="modal1">
            <div class="card-title">#${element.num} ${element.name}</div>
              <div class="card-image" style="overflow: initial">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
              </div>
              <div class="card-content" style="font-size: 16px;padding: 20px 12px;">
                <p>${element.type.join(" - ")}</p>
              </div>
            </div>
          </a>
        </div>
      </div>`;
  });

  newData.forEach(element => {
    let button = document.getElementById("infobtn" + element.id);
    button.onclick = function () {
      createModal = document.createElement("div");
      createModal.setAttribute("id", "modal1");
      createModal.setAttribute("class", "modal");
      mainBody.insertBefore(createModal,header);

      createModal.innerHTML = `
      <div class="modal-content">
        <div class="white">
          <h4>#${element.num} ${element.name}</h4>
          <div class="row">
            <div class="col l5">
              <div class="card-image">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
              </div>
            </div>
            <div class="col l6">
              <div class="card-stacked">
                <div class="card-content">
                    <h6>Altura: ${element.height}</h6>
                    <h6>Peso: ${element.weight}</h6>
                    <h6>Huevo: ${element.egg}</h6>
                    <h6>Debilidades: ${element.weaknesses.join(" - ")}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    createModal.style.display = "block";  

    window.onclick = function(event) {
      if (event.target == createModal) {
        createModal.style.display = "none";
      }
    }
    }
  });
};

document.getElementById("type").addEventListener("change", () => {

  document.getElementById("root").innerHTML = "";

  let selectedOrder = document.getElementById("order").value;
  let selectedType = document.getElementById("type").value;
  const dataOnSort = pokemonData.sortData(data, selectedOrder);
  const newData = pokemonData.filterData(dataOnSort, selectedType);
  const totalPokemon = pokemonData.computeStats(newData);

  createTotal = document.createElement("h5");
  mainBox.appendChild(createTotal);

  createCard = document.createElement("div");
  mainBox.appendChild(createCard);

  createTotal.innerHTML = `Total de tu selección: ${totalPokemon}`

  newData.forEach(element => {
    createCard.innerHTML +=
      `<div class="col l3">
      <div class="card small">
        <a class="buttonCard" id="infobtn${element.id}" data-target="modal1">
          <div class="card-title">#${element.num} ${element.name}</div>
            <div class="card-image" style="overflow: initial">
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
            </div>
            <div class="card-content" style="font-size: 16px;padding: 20px 12px;">
              <p>${element.type.join(" - ")}</p>
            </div>
          </div>
        </a>
      </div>
    </div>`;
  });

  newData.forEach(element => {
    let button = document.getElementById("infobtn" + element.id);
    button.onclick = function () {
      createModal = document.createElement("div");
      createModal.setAttribute("id", "modal1");
      createModal.setAttribute("class", "modal");
      mainBody.insertBefore(createModal,header);

      createModal.innerHTML = `
      <div class="modal-content">
        <div class="white">
          <h4>#${element.num} ${element.name}</h4>
          <div class="row">
            <div class="col l5">
              <div class="card-image">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
              </div>
            </div>
            <div class="col l6">
              <div class="card-stacked">
                <div class="card-content">
                    <h6>Altura: ${element.height}</h6>
                    <h6>Peso: ${element.weight}</h6>
                    <h6>Huevo: ${element.egg}</h6>
                    <h6>Debilidades: ${element.weaknesses.join(" - ")}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    createModal.style.display = "block";  

    window.onclick = function(event) {
      if (event.target == createModal) {
        createModal.style.display = "none";
      }
    }
    }
  });
});

document.getElementById("order").addEventListener("change", () => {

  document.getElementById("root").innerHTML = "";
  let selectedOrder = document.getElementById("order").value;
  let selectedType = document.getElementById("type").value;
  const dataOnFilter = pokemonData.filterData(data, selectedType);
  const newData = pokemonData.sortData(dataOnFilter, selectedOrder);
  const totalPokemon = pokemonData.computeStats(newData);

  createTotal = document.createElement("h5");
  mainBox.appendChild(createTotal);

  createCard = document.createElement("div");
  mainBox.appendChild(createCard);

  createTotal.innerHTML = `Total de tu selección: ${totalPokemon}`

  newData.forEach(element => {
    createCard.innerHTML +=
      `<div class="col l3">
      <div class="card small">
        <a class="buttonCard" id="infobtn${element.id}" data-target="modal1">
          <div class="card-title">#${element.num} ${element.name}</div>
            <div class="card-image" style="overflow: initial">
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
            </div>
            <div class="card-content" style="font-size: 16px;padding: 20px 12px;">
              <p>${element.type.join(" - ")}</p>
            </div>
          </div>
        </a>
      </div>
    </div>`;
  });

  newData.forEach(element => {
    let button = document.getElementById("infobtn" + element.id);
    button.onclick = function () {
      createModal = document.createElement("div");
      createModal.setAttribute("id", "modal1");
      createModal.setAttribute("class", "modal");
      mainBody.insertBefore(createModal,header);

      createModal.innerHTML = `
      <div class="modal-content">
        <div class="white">
          <h4>#${element.num} ${element.name}</h4>
          <div class="row">
            <div class="col l5">
              <div class="card-image">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
              </div>
            </div>
            <div class="col l6">
              <div class="card-stacked">
                <div class="card-content">
                    <h6>Altura: ${element.height}</h6>
                    <h6>Peso: ${element.weight}</h6>
                    <h6>Huevo: ${element.egg}</h6>
                    <h6>Debilidades: ${element.weaknesses.join(" - ")}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    createModal.style.display = "block";  

    window.onclick = function(event) {
      if (event.target == createModal) {
        createModal.style.display = "none";
      }
    }
    }
  });
});

