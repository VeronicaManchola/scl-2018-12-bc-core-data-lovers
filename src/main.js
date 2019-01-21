//Declaracion de variables globals a utilizar en las funciones
let mainBody = document.getElementsByTagName("body")[0];
let header = document.getElementById("header");
let mainBox = document.getElementById("root");
let createTotal;
let createModal;

//Fetch del json que contiene la data de los pokemones
const jsonFile = "./data/pokemon/pokemon.json";
let jsonPokemon = "";
fetch(jsonFile)
  .then(response => response.json())
  .then(jsonData => {
    initialWindow(jsonData);
    return jsonPokemon = jsonData;
  })
  .catch(error => {
    mainBox.innerHTML = "Error: " + error;
  });

//Imprime tarjetas de todos los pokemones al cargar la pagina
const initialWindow = (jsonPokemon) => {

  //Extrae el array pokemon de data
  const data = jsonPokemon.pokemon;

  //Recorre la data y agrega cada tarjeta con la informacion requerida a mainBox
  data.forEach(element => {
    mainBox.innerHTML +=
      `<div class="col-sm-4 col-md-4 col-lg-3">
        <div class="card">
          <a class="buttonCard" id="infobtn${element.id}" data-toggle="modal" data-target="modal1">
            <h4 class="card-title">#${element.num} ${element.name}</h4>
            <div class="card-img-top">
              <img class="img-fluid" alt="Responsive image" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
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
    let detailsBtn = document.getElementById("infobtn" + element.id);

    //Funcion que se activa cuando se le da click a una de las tarjetas de pokemones
    detailsBtn.onclick = function () {
      createModal = document.createElement("div");
      createModal.setAttribute("id", "modal1");
      createModal.setAttribute("class", "modal")
      createModal.setAttribute("tabindex", "-1");
      createModal.setAttribute("role", "dialog");
      createModal.setAttribute("aria-labelledby", "myLargeModalLabel");
      createModal.setAttribute("aria-hidden", "true");
      mainBody.insertBefore(createModal, header);

      //Crea un modal con los detalles del pokemon al que se le hizo click y lo agrega en todo el documento
      createModal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">#${element.num} ${element.name}</h4>
          </div>
          <div class="row">
            <div class="col lg-5">
              <img class="responsive-img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
            </div>
            <div class="col lg-6">
              <div class="list-group list-group-flush">
                <h6 class="list-group-item">Altura: ${element.height}</h6>
                <h6 class="list-group-item">Peso: ${element.weight}</h6>
                <h6 class="list-group-item">Huevo: ${element.egg}</h6>
                <h6 class="list-group-item">Debilidades: ${element.weaknesses.join(" - ")}</h6>
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
};

//Filtra pokemones por el tipo seleccionado e imprime las tarjetas respectivas
document.getElementById("type").addEventListener("change", () => {

  //Limpia div root
  mainBox.innerHTML = "";

  //Extrae el array pokemon de data
  const data = jsonPokemon.pokemon;

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
  createTotal.setAttribute("class", "col-12");
  createTotal.setAttribute("id","total");
  mainBox.appendChild(createTotal);
  createTotal.innerHTML = `Total de tu selección: ${totalPokemon}`

  //Recorre la data del tipo seleccionado y agrega cada tarjeta con la informacion requerida a mainBox
  newData.forEach(element => {
    mainBox.innerHTML +=
      `<div class="col-sm-4 col-md-4 col-lg-3">
        <div class="card">
          <a class="buttonCard" id="infobtn${element.id}" data-toggle="modal" data-target="modal1">
            <h4 class="card-title">#${element.num} ${element.name}</h4>
            <div class="card-img-top">
              <img class="img-fluid" alt="Responsive image" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
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
    let detailsBtn = document.getElementById("infobtn" + element.id);

    //Funcion que se activa cuando se le da click a una de las tarjetas de pokemones
    detailsBtn.onclick = function () {
      createModal = document.createElement("div");
      createModal.setAttribute("id", "modal1");
      createModal.setAttribute("class", "modal")
      createModal.setAttribute("tabindex", "-1");
      createModal.setAttribute("role", "dialog");
      createModal.setAttribute("aria-labelledby", "myLargeModalLabel");
      createModal.setAttribute("aria-hidden", "true");
      mainBody.insertBefore(createModal, header);

      //Crea un modal con los detalles del pokemon al que se le hizo click y lo agrega en todo el documento
      createModal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">#${element.num} ${element.name}</h4>
          </div>
          <div class="row">
            <div class="col lg-5">
              <img class="responsive-img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
            </div>
            <div class="col lg-6">
              <div class="list-group list-group-flush">
                <h6 class="list-group-item">Altura: ${element.height}</h6>
                <h6 class="list-group-item">Peso: ${element.weight}</h6>
                <h6 class="list-group-item">Huevo: ${element.egg}</h6>
                <h6 class="list-group-item">Debilidades: ${element.weaknesses.join(" - ")}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>`;

      //Muestra el modal
      createModal.style.display = "block";

      let closeModal = document.getElementById("close" + element.id);
      //Cierra el modal cuando se le hace click al area sombreada
      window.onclick = function (event) {
        if (event.target == createModal || event.target == closeModal) {
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

  //Extrae el array pokemon de data
  const data = jsonPokemon.pokemon;

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
  createTotal.setAttribute("class", "col-12");
  mainBox.appendChild(createTotal);
  createTotal.innerHTML = `Total de tu selección: ${totalPokemon}`

  //Recorre la data, la organiza y agrega cada tarjeta con la informacion requerida a mainBox
  newData.forEach(element => {
    mainBox.innerHTML +=
      `<div class="col-sm-4 col-md-4 col-lg-3">
        <div class="card">
          <a class="buttonCard" id="infobtn${element.id}" data-toggle="modal" data-target="modal1">
            <h4 class="card-title">#${element.num} ${element.name}</h4>
            <div class="card-img-top">
              <img class="img-fluid" alt="Responsive image" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
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
    let detailsBtn = document.getElementById("infobtn" + element.id);

    //Funcion que se activa cuando se le da click a una de las tarjetas de pokemones
    detailsBtn.onclick = function () {
      createModal = document.createElement("div");
      createModal.setAttribute("id", "modal1");
      createModal.setAttribute("class", "modal")
      createModal.setAttribute("tabindex", "-1");
      createModal.setAttribute("role", "dialog");
      createModal.setAttribute("aria-labelledby", "myLargeModalLabel");
      createModal.setAttribute("aria-hidden", "true");
      mainBody.insertBefore(createModal, header);

      //Crea un modal con los detalles del pokemon al que se le hizo click y lo agrega en todo el documento
      createModal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">#${element.num} ${element.name}</h4>
          </div>
          <div class="row">
            <div class="col lg-5">
              <img class="responsive-img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
            </div>
            <div class="col lg-6">
              <div class="list-group list-group-flush">
                <h6 class="list-group-item">Altura: ${element.height}</h6>
                <h6 class="list-group-item">Peso: ${element.weight}</h6>
                <h6 class="list-group-item">Huevo: ${element.egg}</h6>
                <h6 class="list-group-item">Debilidades: ${element.weaknesses.join(" - ")}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>`;

      //Muestra el modal
      createModal.style.display = "block";

      let closeModal = document.getElementById("close" + element.id);
      //Cierra el modal cuando se le hace click al area sombreada
      window.onclick = function (event) {
        if (event.target == createModal || event.target == closeModal) {
          createModal.style.display = "none";
        }
      }
    }
  });
});

//Filtra pokemones por el tipo seleccionado e imprime las tarjetas respectivas
document.getElementById("searchBtn").addEventListener("click", (event) => {

  event.preventDefault();

  //Limpia div root
  mainBox.innerHTML = "";

  //Extrae el array pokemon de data
  const data = jsonPokemon.pokemon;

  //Trae el valor del orden y el de busqueda
  //let selectedOrder = document.getElementById("order").value;
  let dataEntry = document.getElementById("searchInput").value;

  //Funcion de organizado para confirmar el orden deseado 
  //const dataOnSort = window.pokemonData.sortData(data, selectedOrder);

  //Funcion de busqueda dependiendo de lo entrado en la barra
  const newData = window.pokemonData.searchData(data, dataEntry);

  //Calcula el total de pokemones del tipo seleccionado
  const totalPokemon = window.pokemonData.computeStats(newData);

  //Crea enunciado del total de pokemones y lo imprime antes de las tarjetas
  createTotal = document.createElement("h5");
  createTotal.setAttribute("class", "col-12");
  mainBox.appendChild(createTotal);
  createTotal.innerHTML = `Total de tu selección: ${totalPokemon}`

  //Recorre la data del tipo seleccionado y agrega cada tarjeta con la informacion requerida a mainBox
  newData.forEach(element => {
    mainBox.innerHTML +=
      `<div class="col-sm-4 col-md-4 col-lg-3">
        <div class="card">
          <a class="buttonCard" id="infobtn${element.id}" data-toggle="modal" data-target="modal1">
            <h4 class="card-title">#${element.num} ${element.name}</h4>
            <div class="card-img-top">
              <img class="img-fluid" alt="Responsive image" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
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
    let detailsBtn = document.getElementById("infobtn" + element.id);

    //Funcion que se activa cuando se le da click a una de las tarjetas de pokemones
    detailsBtn.onclick = function () {
      createModal = document.createElement("div");
      createModal.setAttribute("id", "modal1");
      createModal.setAttribute("class", "modal")
      createModal.setAttribute("tabindex", "-1");
      createModal.setAttribute("role", "dialog");
      createModal.setAttribute("aria-labelledby", "myLargeModalLabel");
      createModal.setAttribute("aria-hidden", "true");
      mainBody.insertBefore(createModal, header);

      //Crea un modal con los detalles del pokemon al que se le hizo click y lo agrega en todo el documento
      createModal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">#${element.num} ${element.name}</h4>
          </div>
          <div class="row">
            <div class="col lg-5">
              <img class="responsive-img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
            </div>
            <div class="col lg-6">
              <div class="list-group list-group-flush">
                <h6 class="list-group-item">Altura: ${element.height}</h6>
                <h6 class="list-group-item">Peso: ${element.weight}</h6>
                <h6 class="list-group-item">Huevo: ${element.egg}</h6>
                <h6 class="list-group-item">Debilidades: ${element.weaknesses.join(" - ")}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>`;

      //Muestra el modal
      createModal.style.display = "block";

      let closeModal = document.getElementById("close" + element.id);
      //Cierra el modal cuando se le hace click al area sombreada
      window.onclick = function (event) {
        if (event.target == createModal || event.target == closeModal) {
          createModal.style.display = "none";
        }
      }
    }
  });
});