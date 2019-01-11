window.pokemonData = {

  //Funcion de orden
  sortData: (data, selectedOrder) => {

    //Si el orden seleccionado es el default o 1-151. organiza y retorna la data con el nuevo orden
    if (selectedOrder === "0" || selectedOrder === "lower") {
      const sortedData = data;
      data.sort(function (a, b) {
        if (a.num < b.num) {
          return -1;
        }
        if (a.num > b.num) {
          return 1;
        }
      })
      return sortedData;
    }

    //Si el orden seleccionado es 151-1, organiza y retorna la data con el nuevo orden
    else if (selectedOrder === "higher") {
      const sortedData = data;
      data.sort(function (a, b) {
        if (b.num < a.num) {
          return -1;
        }
        if (b.num > a.num) {
          return 1;
        }
      })
      return sortedData;
    }

    //Si el orden seleccionado es a-z, organiza y retorna la data con el nuevo orden
    else if (selectedOrder === "az") {
      const sortedData = data;
      data.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      })
      return sortedData;
    }

    //Si el orden seleccionado es z-a, organiza y retorna la data con el nuevo orden
    else if (selectedOrder === "za") {
      const sortedData = data;
      data.sort(function (a, b) {
        if (b.name < a.name) {
          return -1;
        }
        if (b.name > a.name) {
          return 1;
        }
      })
      return sortedData;
    }
  },

  //Funcion de filtro
  filterData: (data, selectedType) => {

    //Si el tipo seleccionado es el default, retorna la data sin ningun filtro
    if (selectedType === "0") {
      return data;
    }

    //Revisa todos los tipos de pokemon y retorna a la data solo los que coinciden con la seleccion
    const filteredData = data.filter(element => {
      return element.type[0] === selectedType || element.type[1] === selectedType;
    })
    return filteredData;
  },

  //Funcion de calculo. Cuenta cuantos pokemones hay
  computeStats: (data) => {
    return data.length;
  }
}