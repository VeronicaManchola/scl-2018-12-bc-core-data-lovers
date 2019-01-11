//Declaracion de variables globals a utilizar en las funciones
const data = window.POKEMON.pokemon;
let mainBody = document.getElementsByTagName("body")[0];
let header = document.getElementById("header");
let mainBox = document.getElementById("root");
let createTotal;
let createModal;

//Inicialización de elementos de Materialize
document.addEventListener('DOMContentLoaded', function () {
  window.M.AutoInit();
});

//Imprime tarjetas de todos los pokemones al cargar la pagina
window.onload = function () {

  //Limpia div root
  mainBox.innerHTML = "";

  //Recorre la data y agrega cada tarjeta con la informacion requerida a mainBox
  data.forEach(element => {
    mainBox.innerHTML +=
      `<div class="col s7 m4 l3">
        <div class="card small">
          <a class="buttonCard" id="infobtn${element.id}" data-target="modal1">
            <div class="card-title">#${element.num} ${element.name}</div>
            <div class="card-image" style="overflow: initial">
              <img class="responsive-img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
            </div>
            <div class="card-content">
              <p>${element.type.join(" - ")}</p>
            </div>
          </a>
        </div>
      </div>`;
  });

  //Recorrre la data
  data.forEach(element => {
    let button = document.getElementById("infobtn" + element.id);

    //Funcion que se activa cuando se le da click a una de las tarjetas de pokemones
    button.onclick = function () {
      createModal = document.createElement("div");
      createModal.setAttribute("id", "modal1");
      createModal.setAttribute("class", "modal");
      mainBody.insertBefore(createModal, header);

      //Crea un modal con los detalles del pokemon al que se le hizo click y lo agrega en todo el documento
      createModal.innerHTML = `
      <div class="modal-content">
        <div class="white">
          <h4>#${element.num} ${element.name}</h4>
          <div class="row">
            <div class="col l5">
              <img class="responsive-img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
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

      //Muestra el modal
      createModal.style.display = "block";

      //Cierra el modal cuando se le hace click al area sombreada
      window.onclick = function (event) {
        if (event.target == createModal) {
          createModal.style.display = "none";
        }
      }
    }
  });
}

//Filtra pokemones por el tipo seleccionado e imprime las tarjetas respectivas
document.getElementById("type").addEventListener("change", () => {

  //Limpia div root
  mainBox.innerHTML = "";

  //Trae el valor del orden y el tipo seleccionado
  let selectedOrder = document.getElementById("order").value;
  let selectedType = document.getElementById("type").value;

  //Funcion de organizado para confirmar el orden deseado 
  const dataOnSort = window.pokemonData.sortData(data, selectedOrder);

  //Funcion de filtrado dependiendo del tipo seleccionado
  const newData = window.pokemonData.filterData(dataOnSort, selectedType);

  //Calcula el total de pokemones del tipo seleccionado
  const totalPokemon = window.pokemonData.computeStats(newData);

  //Crea enunciado del total de pokemones y lo imprime antes de las tarjetas
  createTotal = document.createElement("h5");
  mainBox.appendChild(createTotal);
  createTotal.innerHTML = `Total de tu selección: ${totalPokemon}`

  //Recorre la data del tipo seleccionado y agrega cada tarjeta con la informacion requerida a mainBox
  newData.forEach(element => {
    mainBox.innerHTML +=
      `<div class="col s7 m4 l3">
        <div class="card small">
          <a class="buttonCard" id="infobtn${element.id}" data-target="modal1">
            <div class="card-title">#${element.num} ${element.name}</div>
            <div class="card-image" style="overflow: initial">
              <img class="responsive-img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
            </div>
            <div class="card-content">
              <p>${element.type.join(" - ")}</p>
            </div>
          </a>
        </div>
      </div>`;
  });

  //Recorre la data
  newData.forEach(element => {
    let button = document.getElementById("infobtn" + element.id);

    //Funcion que se activa cuando se le da click a una de las tarjetas de pokemones
    button.onclick = function () {
      createModal = document.createElement("div");
      createModal.setAttribute("id", "modal1");
      createModal.setAttribute("class", "modal");
      mainBody.insertBefore(createModal, header);

      //Crea un modal con los detalles del pokemon al que se le hizo click y lo agrega en todo el documento
      createModal.innerHTML = `
      <div class="modal-content">
        <div class="white">
          <h4>#${element.num} ${element.name}</h4>
          <div class="row">
            <div class="col l5">
              <img class="responsive-img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
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

      //Muestra el modal
      createModal.style.display = "block";

      //Cierra el modal cuando se le hace click al area sombreada
      window.onclick = function (event) {
        if (event.target == createModal) {
          createModal.style.display = "none";
        }
      }
    }
  });

});

//Organiza los pokemones por el orden deseado e imprime las tarjetas respectivas
document.getElementById("order").addEventListener("change", () => {

  //Limpia div root
  mainBox.innerHTML = "";

  //Trae el valor del orden y el tipo seleccionado
  let selectedOrder = document.getElementById("order").value;
  let selectedType = document.getElementById("type").value;

  //Funcion de filtrado para confirmar el tipo deseado 
  const dataOnFilter = window.pokemonData.filterData(data, selectedType);

  //Funcion de organizado dependiendo del orden seleccionado
  const newData = window.pokemonData.sortData(dataOnFilter, selectedOrder);

  //Calcula el total de pokemones del tipo seleccionado
  const totalPokemon = window.pokemonData.computeStats(newData);

  //Crea enunciado del total de pokemones y lo imprime antes de las tarjetas
  createTotal = document.createElement("h5");
  mainBox.appendChild(createTotal);
  createTotal.innerHTML = `Total de tu selección: ${totalPokemon}`

  //Recorre la data, la organiza y agrega cada tarjeta con la informacion requerida a mainBox
  newData.forEach(element => {
    mainBox.innerHTML +=
      `<div class="col s7 m4 l3">
        <div class="card small">
          <a class="buttonCard" id="infobtn${element.id}" data-target="modal1">
            <div class="card-title">#${element.num} ${element.name}</div>
            <div class="card-image" style="overflow: initial">
              <img class="responsive-img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
            </div>
            <div class="card-content">
              <p>${element.type.join(" - ")}</p>
            </div>
          </a>
        </div>
      </div>`;
  });

  //Recorre la data
  newData.forEach(element => {
    let button = document.getElementById("infobtn" + element.id);

    //Funcion que se activa cuando se le da click a una de las tarjetas de pokemones
    button.onclick = function () {
      createModal = document.createElement("div");
      createModal.setAttribute("id", "modal1");
      createModal.setAttribute("class", "modal");
      mainBody.insertBefore(createModal, header);

      //Crea un modal con los detalles del pokemon al que se le hizo click y lo agrega en todo el documento
      createModal.innerHTML = `
      <div class="modal-content">
        <div class="white">
          <h4>#${element.num} ${element.name}</h4>
          <div class="row">
            <div class="col l5">
              <img class="responsive-img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
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

      //Muestra el modal
      createModal.style.display = "block";

      //Cierra el modal cuando se le hace click al area sombreada
      window.onclick = function (event) {
        if (event.target == createModal) {
          createModal.style.display = "none";
        }
      }
    }
  });
});


