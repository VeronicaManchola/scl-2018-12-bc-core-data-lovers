window.pokemonData = {
  sortData: (data, selectedOrder) => {
    if (selectedOrder === "0" || selectedOrder === "lower") { //cuando pinche Orden o 1-151//
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
    } else if (selectedOrder === "higher") { //cuando pinche 151-1//
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
    } else if (selectedOrder === "az") { //cuando pinche A-Z//
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
    } else if (selectedOrder === "za") { //cuando pinche Z-A//
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

  filterData: (data, selectedType) => {
    if (selectedType === "0") { //cuando pinche Tipo en el select me retorna data completa//
      return data;
    }
    const filteredData = data.filter(element => {
      return element.type[0] === selectedType || element.type[1] === selectedType;//selectedType de main.js//
    })
    return filteredData;
  },

  computeStats: (data) => {
    return data.length;
  }
}